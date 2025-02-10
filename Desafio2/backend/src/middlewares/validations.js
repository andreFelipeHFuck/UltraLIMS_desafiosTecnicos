import InvalidCep from '../errors/InvalidCep.js';

const cepValidator = (req, res, next) => {
    const cep = req.body.cep.trim();

    if(/^[0-9]{8}$/.test(cep))
        next();
    else 
        next(new InvalidCep());

}

export default cepValidator;