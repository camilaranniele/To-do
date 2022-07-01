  const TaskService = require('../services/Task.service');

const getAllTasks = async (req, res) => {
  const tasks = await TaskService.getAllTasks();
  return res.status(200).json(tasks);
}

const createNewTask = async (req, res) => {
  const { task, status } = req.body;
  const newTask = await TaskService.createNewTask({ task, status});
  return res.status(201).json(newTask);
}

module.exports = {
  getAllTasks,
  createNewTask
};
