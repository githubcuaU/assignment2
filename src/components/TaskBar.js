
import React, { useState } from 'react';
import DisplayTask from './DisplayTask';


function TaskBar(props) 
{

    // if user is updating a task, the editing box will show the task description instead of a blank field
    // if user is not editing, then the task bar will either show nothing or show the texts specified by the placeholder
    const [input, setInput] = useState(props.edit ? props.edit.value : ''); 

    // set input to whatever the user enters in the form
    const handleChange = e => 
    {
        setInput(e.target.value);
    };

    
    // a randomly-generated id will be assigned once the user submits a task
    let subTask;
    const handleSubmit = e => 
    {
        e.preventDefault(); // prevent refreshes after submission

        if (e.target.id === 'sub-task')
        {
            subTask = true;
        }
        else
        {
            subTask = false;
        }
        <DisplayTask subTask={subTask}/>

        props.onSubmit
        ({
            id: Math.floor(Math.random() * 500),
            desc: input
        });

        setInput('');
    };

    return (
      <form className='taskbar' onSubmit={handleSubmit}>

        {/* if user is updating a task, display the editing box */}
        {props.edit ? 
        (
          <>
            <input
              className='edit-task'
              placeholder='Update task'
              value={input}
              onChange={handleChange}
            />

          <button className='edit-btn' onClick={handleSubmit}>UPDATE</button>
          </>
        ) : 
      
        // if user is adding a new task, display the task bar
        (
          <>
            <input
              className='add-task'
              placeholder='Add a task'
              value={input}
              onChange={handleChange}
            />
            
          <button className='add-btn' id="main-task" onClick={handleSubmit}>Main Task</button>
          <button className='add-btn' id="sub-task" onClick={handleSubmit}>Sub Task</button>
          </>
      )}
      </form>
  );
}

export default TaskBar;
