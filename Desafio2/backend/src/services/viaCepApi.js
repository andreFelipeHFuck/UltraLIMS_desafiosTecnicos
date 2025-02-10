import axios from 'axios';

import InvalidCep from '../errors/InvalidCep.js';

const URL_BASE = 'https://viacep.com.br/ws/';

const filtersEndereco = (endereco) => {
    const ende = {};

    ende.cep = endereco.cep;
    ende.rua = endereco.logradouro || endereco.rua;
    ende.bairro = endereco.bairro;
    ende.cidade = endereco.localidade || endereco.cidade;
    ende.estado = endereco.estado;
    ende.uf = endereco.uf;

    return ende;
}

const getEndereco = async (cep) => {
    let responseState;

    try {
        const response = await axios.get(`${URL_BASE}/${cep}/json`);
        responseState = response.data.erro === 'true';

        if(responseState)
            throw new Error();
        
        return filtersEndereco({...response.data, cep});
    } catch(error) {
        throw new InvalidCep();

    }
}

export { 
 filtersEndereco,
 getEndereco   
};
