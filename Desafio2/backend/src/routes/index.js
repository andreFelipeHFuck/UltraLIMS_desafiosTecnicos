import express from "express";
import enderecos from './enderecoRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Desafio 2: Sistema Web para Consulta e Armazenamento de Endereços"});
    });

    app.use(
        express.json(),
        enderecos
    );
}

export default routes;
