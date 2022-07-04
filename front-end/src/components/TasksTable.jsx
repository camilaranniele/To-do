import React, { useState, useEffect } from 'react';

function TasksTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch('http://localhost:3001/tasks');
      const data = await response.json();
      setTasks(data.map(task => ({ ...task })));
    };
    getTasks();
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
