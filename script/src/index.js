import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/task-list';
import AddTask from './components/add-task';

ReactDOM.render(
    <div>
        <TaskList />
        <AddTask />
    </div>,
    document.getElementById('example')
);