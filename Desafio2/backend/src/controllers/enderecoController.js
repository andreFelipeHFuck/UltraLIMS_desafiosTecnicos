import getEndereco from '../services/viaCepApi.js';


class EnderecoController {
    static registerEndereco = async (req, res, next) => {
        try {
            const cep = req.body.cep;
            const endereco = await getEndereco(cep);

            res.status(201).send(endereco);
        }catch(error) {
            next(error);
        }
    }
}

export default EnderecoController;