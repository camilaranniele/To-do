require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();

const PORT = process.env.SERVER_PORT || 3001;
app.use(cors());
app.use(express.json());

app.use('/tasks', routes.TaskRoutes);


app.listen(PORT, () => console.log(` Rodando na porta ${PORT}`));