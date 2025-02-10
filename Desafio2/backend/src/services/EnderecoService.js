import endereco from '../models/Enderecos.js';

class EnderecoService {
    static findByCep = async (cep) => {
        const ende = await endereco.find({cep}).exec();
        return ende;
    }

    static registerEndereco = async (body) => {
        let ende = new endereco(body);
        const resEndereco = await ende.save();

       

        return resEndereco;
    }
}

export default EnderecoService;