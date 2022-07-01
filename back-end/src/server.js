require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.use(routes);
app.use(express.json());

app.listen(PORT, () => console.log(` Rodando na porta ${PORT}`));