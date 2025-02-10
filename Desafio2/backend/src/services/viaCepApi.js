import axios from 'axios';

const URL_BASE = 'https://viacep.com.br/ws/';

async function getEndereco(cep) {
    try {
        const response = await axios.get(`${URL_BASE}/${cep}/json`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error(`Erro ao buscar o Endereço ${cep}`);
    }
}

export default getEndereco;
