import express from 'express';

import cepValidator from '../middlewares/validations.js';
import EnderecoController from '../controllers/enderecoController.js';

const router = express.Router();

router
    .post('/enderecos', cepValidator, EnderecoController.registerEndereco);

export default router;