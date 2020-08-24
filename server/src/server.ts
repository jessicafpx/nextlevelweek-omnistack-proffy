import express from 'express';
import routes from './routes';
import cors from 'cors';

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação no backend
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query params: Paginação, filtros, ordenação

const app = express(); //todas as rotas partem desse app

app.use(express.json());
app.use(cors());
app.use(routes);


//rotas são os endereços q eu quero acessar
app.listen(3333); //faz a aplicação ouvir requisições http, 3333 é a porta

//SELECT * FROM users
//knex('users').select('*')