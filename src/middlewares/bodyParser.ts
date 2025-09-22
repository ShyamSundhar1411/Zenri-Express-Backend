import { json, RequestHandler, urlencoded} from "express";

export const jsonParser: RequestHandler[] = [
    json(),
    urlencoded({extended: true})
]