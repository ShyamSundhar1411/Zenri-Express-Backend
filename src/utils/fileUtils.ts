import fs from "fs";
import csv from "csv-parser";
import { Request, Response } from "express";
import { z } from "zod";
import { TransactionCreateRequestSchema } from "../domain/transaction";

const REQUIRED_HEADERS = [
  "Amount",
  "Currency",
  "Transaction Type",
  "Category",
  "Payment Method",
  "Description",
  "Transaction Date",
];

const OPTIONAL_HEADERS = [
  "Is Subscription",
  "Subscription",
];

const ALLOWED_HEADERS = [...REQUIRED_HEADERS, ...OPTIONAL_HEADERS];


export type CsvTransactionRow = {
  Amount: string;
  Currency: string;
  "Transaction Type": string;
  Category: string;
  "Payment Method": string;
  Description: string;
  "Transaction Date": string;
  "Is Subscription"?: string;
  Subscription?: string;
};
export function parseCsvFile(filePath:string): Promise<CsvTransactionRow[]>{
    return new Promise((resolve,reject) => {
        const rows: CsvTransactionRow[] = [];
        let headersChecked = false;
        fs.createReadStream(filePath)
        .pipe(csv())
        .on("headers",(headers: string[]) => {
            const missingHeaders = REQUIRED_HEADERS.filter(header => !headers.includes(header));
            const unknownHeaders = headers.filter(
                (header) => !ALLOWED_HEADERS.includes(header)
            )
            if (missingHeaders.length > 0){
                reject(
                    new Error(
                        `Missing required headers: ${missingHeaders.join(", ")}`
                    )
                )
                return 
            }
            if (unknownHeaders.length >0){
                reject(
                    new Error(
                        `Unknown CSV headers found: ${unknownHeaders.join(", ")}`
                    )
                );
                return;
            }
            headersChecked = true;
        }).
        on("data",(row:CsvTransactionRow) => {
            if(headersChecked){
                rows.push(row);
            }
        })
        .on("end",() => {
            if(rows.length == 0){
                reject(new Error("CSV file is empty or no valid rows found"))
                return;
            }
            resolve(rows);
        })
        .on("error",reject);
    });
}