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

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await TaskService.deleteTask(id);

  return res.status(204).end();
}

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  const updatedTask = await TaskService.updateTask({ id, task, status });
  return res.status(200).json(updatedTask);
}

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
};
