const express = require('express');
const TaskController = require('../controllers/Task.controller');

const routes = express.Router();

routes.get('/', TaskController.getAllTasks);
routes.post('/', TaskController.createNewTask);

module.exports = routes;