import React from 'react';
import TasksTable from '../components/TasksTable';

class Tasks extends React.Component {
  render() {
    return (
      <div>
        Tasks
        <TasksTable />
      </div>
    )
  }
}

export default Tasks;
