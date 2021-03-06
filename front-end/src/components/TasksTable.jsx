import axios from 'axios';
import React, { useState, useEffect } from 'react';

function TasksTable() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({task: '', status: 'pendente'});
  const [areUpdating, setAreUpdating] = useState(false);
  const [taskUpdatedId, setTaskUpdatedId] = useState(0);
  const baseURL = 'http://localhost:3001/tasks'

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
   return axios.get(baseURL).then((response) => {
      setTasks(response.data);
    });
  }

  function handleChange({ target}) {
    const { name, value } = target;
    setTask({
      ...task,
      [name]: value });
  }

  function createNewTask() {
    const teste = axios
      .post(baseURL, {
        task: task.task,
        status: task.status,
      })
      .then((response) => {
        setTask([...tasks, task])
      })
      console.log(teste);
  }

  function updateTask(task, status, id) {
    setAreUpdating(true);
    setTask({task, status});
    setTaskUpdatedId(id);
  }

  function finishUpdate() {
    axios
    .put(`${baseURL}/${taskUpdatedId}`, {
      task: task.task,
      status: task.status,
    });
  getTasks();
  }

  function deleteTask(id) {
     axios
      .delete(`${baseURL}/${id}`)
      .then(() => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
  }

  return (
    <div>
      <form>
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            onChange={ handleChange }
            value={ task.task }
          />
        </label>

        <label htmlFor="status">
          <select
            id="status"
            name="status"
            onChange={ handleChange }
            value={ task.status }
          >
            <option value="pendente">
              pendente
            </option>
            <option value="em andamento">
              em andamento
            </option>
            <option value="pronto">
              pronto
            </option>
          </select>
        </label>

        {areUpdating ? <button onClick={ finishUpdate }>Atualizar</button> : <button onClick={ createNewTask }>Adicionar</button>}
        
      </form>
      <table>
        <thead>
          <th>Task</th>
          <th>Status</th>
          <th>Date</th>
        </thead>
        <tbody>
        { tasks.map((task) => (
          <tr>
            <td>{task.task}</td>
            <td>{task.status}</td>
            <td>{task.taskDate}</td>
            <button onClick={() => updateTask(task.task, task.status, task.id)}>Atualizar</button>
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable;
