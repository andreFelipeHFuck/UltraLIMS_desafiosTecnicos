import express from 'express';

import cepValidator from '../middlewares/validations.js';
import EnderecoController from '../controllers/enderecoController.js';
import pagination from '../middlewares/pagination.js';

const router = express.Router();

router
    .get('/enderecos', EnderecoController.listEnderecos, pagination)
    .post('/enderecos', cepValidator, EnderecoController.registerEndereco);

export default router;