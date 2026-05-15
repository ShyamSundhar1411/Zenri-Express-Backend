import multer from "multer";
import { Request } from "express";

const storage = multer.memoryStorage()

const csvFileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    if (file.mimetype === "text/csv" || file.originalname.endsWith(".csv")){
        cb(null,true)
    } else{
        cb(new Error("Only .csv files are allowed"))
    }
}

export const multerCSVMiddleware = multer({
    storage,
    fileFilter: csvFileFilter,
    limits: {
        fileSize: 5*1024*104
    }
})

