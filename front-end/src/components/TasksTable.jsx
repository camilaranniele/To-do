import axios from 'axios';
import React, { useState, useEffect } from 'react';

function TasksTable() {
  const [tasks, setTasks] = useState([]);
  const baseURL = 'http://localhost:3001/tasks'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTasks(response.data);
    });
  }, []);

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
            <button>Atualizar</button>
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable;
