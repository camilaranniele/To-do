const { tasks }= require('../database/models');

const getAllTasks = async() => {
  const allTasks = await tasks.findAll();
  return allTasks;
}

const createNewTask = async({ task, status }) => {
  const date = new Date();
  const newTask = await tasks.create({ task, status, taskDate: date });

  return newTask;
}

const deleteTask = async (id) => {
  await tasks.destroy({ where: { id } })
}

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
};
