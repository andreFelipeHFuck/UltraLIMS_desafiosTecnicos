import endereco from '../models/Enderecos.js';
import EnderecoService from '../services/EnderecoService.js';
import { getEndereco, filtersEndereco } from '../services/viaCepApi.js';

class EnderecoController {
    static listEnderecos = async (req, res, next) => {
        try {
            const searchEndereco = endereco.find();
            req.result = searchEndereco;
            next();
        } catch (error) {
            next(error);
        }
    }

    static registerEndereco = async (req, res, next) => {
        try {
            const cep = req.body.cep.trim();
            let endereco = await EnderecoService.findByCep(cep);

            if(endereco.length > 0)
                return res.status(201).send(
                       filtersEndereco(endereco[0])
                );

            endereco = await getEndereco(cep);
            EnderecoService.registerEndereco(endereco);

            return res.status(201).send(endereco);
        }catch(error) {
            next(error);
        }
    }
}

export default EnderecoController;