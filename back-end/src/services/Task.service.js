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

const updateTask = async ({ id, task, status }) => {
  await tasks.update({ task, status }, { where: { id }});
  const updatedPost = await tasks.findOne({ where: { id }});
  return updateTask;
}

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
};
