const { tasks }= require('../database/models');

const getAllTasks = async() => {
  const allTasks = await tasks.findAll({order: [
    ['task', 'ASC'],
    ['taskDate', 'ASC'],
    ['status', 'ASC']
  ]});
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

const updateTask = async ({ id, task, status }) => {
  await tasks.update({ task, status }, { where: { id }});
  const updatedTask = await tasks.findOne({ where: { id }});
  return updatedTask;
}

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
};
