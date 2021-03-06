const express = require('express');
const TaskController = require('../controllers/Task.controller');

const routes = express.Router();

routes.get('/', TaskController.getAllTasks);
routes.post('/', TaskController.createNewTask);
routes.delete('/:id', TaskController.deleteTask);
routes.put('/:id', TaskController.updateTask);

module.exports = routes;