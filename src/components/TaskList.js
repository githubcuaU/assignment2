
import React, { useState } from 'react';
import TaskBar from './TaskBar';
import DisplayTask from './DisplayTask';

function TaskList() 
{

  // the list is empty initially because no task has been added
  const [tasks, setTasks] = useState([]);


  //------------------------------------ADD NEW TASKS-----------------------------------
  const addTask = task => 
  {

      if (task.desc === "") 
      {
          alert("Please enter a task, cannot leave the field empty.");
          return;
      }

      // display both old and new tasks
      // new tasks are added below existing tasks
      const addedTask = [...tasks, task];
      setTasks(addedTask);
  };

  //--------------------------------EDIT EXISTING TASKS---------------------------------
  const editTask = (id, editedTask) => 
  {
      if (editedTask.desc === "") 
      {
          alert("Please enter a task, cannot leave the field empty.");
          return;
      }

      // if user is editing the task, then update the task description
      // if not, then return the original task
      setTasks([...tasks].map(task => (task.id === id ? editedTask : task)));
  };


  //---------------------------------COMPLETE TASKS-------------------------------------
  const completeTask = id => 
  {
      let completeStatus = tasks.map(task => 
      {
          if (task.id === id)
          {
              // toggle the complete state
              // clicking on a completed task will return it to normal state and vice versa
              task.complete = !task.complete;
          }
          return task;
      });
      
      setTasks(completeStatus);
  };


  //--------------------------------DELETE TASKS----------------------------------------
  // display the list of remaining tasks after removing the deleted tasks
  const deleteTask = id => 
  {
      // "id" identifies the deleted tasks
      // filter from the existing list any tasks which have ids that do not match the deleted ids
      const remainingList = [...tasks].filter(task => task.id !== id);
      setTasks(remainingList);
  };


  //--------------------------------CALL COMPONENTS-------------------------------------
  return (
    <>
      <h1>Task List</h1>

      <TaskBar onSubmit={addTask} /> 

      <DisplayTask
        tasks={tasks}
        editTask={editTask}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default TaskList;
