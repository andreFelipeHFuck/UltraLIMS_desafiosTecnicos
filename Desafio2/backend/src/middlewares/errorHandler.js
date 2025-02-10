import BaseError from "../errors/BaseError.js";
import InvalidCep from '../errors/InvalidCep.js';

function errorHandler(error, req, res, next) {
    console.log(error);

    if(error instanceof InvalidCep) {
        new InvalidCep().sendResponse(res);
    } else {
        new BaseError().sendResponse(res);
    }
}

export default errorHandler;