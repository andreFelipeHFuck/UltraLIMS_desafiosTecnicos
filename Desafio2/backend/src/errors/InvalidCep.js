import BaseError from "./BaseError.js";

class InvalidCep extends BaseError {
    constructor(message='CEP passado é inválido') {
        super(message, 404);
    }
}

export default InvalidCep;