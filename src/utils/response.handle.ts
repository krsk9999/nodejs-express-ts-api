import { Response } from "express";

const responseHandler = (res: Response, serviceResponse: Object | null) => {
    if (!serviceResponse) {
        res.status(400).send({status: "FAIL", data: serviceResponse})
    }
    
}