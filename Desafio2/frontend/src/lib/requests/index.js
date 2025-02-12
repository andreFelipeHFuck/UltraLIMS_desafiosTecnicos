const API_URI = 'http://localhost:8000/enderecos';

async function postEndereco(cep) {
    return await fetch(`${API_URI}`, {
        method: 'POST',
        //signal: AbortSignal.timeout(2000),
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({cep})
    });
}

async function getEnderecos(page=1, filter, order) {
    return await fetch(`${API_URI}?page=${page}&ordination=${filter}:${order}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        }
    })
    
}

export { postEndereco, getEnderecos };