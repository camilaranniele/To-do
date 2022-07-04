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
            <button>Deletar</button>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable;
