import { ZodObject } from "zod";
import { RequestHandler } from "express";

export const schemaValidator = (schema: ZodObject<any>): RequestHandler => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
            });
            next()
        } catch (error) {
            next(error)
        }
    }
}