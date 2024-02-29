import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() 
{
  return (
    <div className='task-list'>
          {/* call TaskList component */}
          <TaskList /> 
    </div>
  );
}

export default App;
