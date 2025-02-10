import mongoose from 'mongoose';

const enderecosSchema = new mongoose.Schema(
    {
        id: {type: String},
        cep: {
            type: String,
            required: [true, 'O CEP é obrigatorio'],
            minlength: 8,
            maxlength: 8
        },
        rua: {
            type: String,
            required: [true, 'A Rua é obrigatorio ']
        },
        bairro: {
            type: String,
            required: [true, 'O Bairro é obrigatorio']
        },
        cidade: {
            type: String,
            required: [true, 'O Cidade é obrigatorio']
        },
        estado: {
            type: String,
            required: [true, 'O Estado é obrigatorio']
        },
        uf: {
            type: String
        }
    }
);

const endereco = mongoose.model('Enderecos', enderecosSchema);

export default endereco;