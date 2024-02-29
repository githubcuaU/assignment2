import React, { useState } from 'react';
import TaskBar from './TaskBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquareFull } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const DisplayTask = ({ tasks, editTask, completeTask, deleteTask, subTask }) => 
{
    const [edit, setEdit] = useState
    ({
        id: null,
        value: ''
    });

    const submitChanges = newDesc => 
    {
        // update the task with new description
        editTask(edit.id, newDesc);

        // display the updated task on the page
        setEdit
        ({
            id: null,
            value: ''
        });
    };

  if (edit.id) 
  {
      // call Taskbar component to display the editing box and allow submission
      return <TaskBar edit={edit} onSubmit={submitChanges} />;
  }

  return tasks.map((task, id) =>
  (
    <div
      // if a task is completed, gray it out and strikethrough with a line
      // if it's not completed, display like any other added tasks
      className={task.complete ? 'completed-task' : 'incomplete-task'}
      key={id}
    >

    {/* display the tasks on the page */}
    {/* <div key={task.id}>{task.desc}</div> */}

    <div className = {subTask ? 'sub-task' : 'incomplete-task'} key={task.id}>
        {task.desc}
    </div>

    <div className='icons'>

      {/* display an empty box for tasks that have not been completed */}
      {/* display a check mark for completed tasks */}
      {/* clicking on the box or the check mark will toggle between the 2 icons */}
      <FontAwesomeIcon
          className={task.complete ? 'complete-icon' : 'incomplete-icon'}
          icon={task.complete ? faCheck : faSquareFull}
          onClick={() => completeTask(task.id)}
      />

      {/* clicking on the edit symbol will allow user to change the task description */}
      <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => setEdit({ id: task.id, value: task.desc })}
      />

      {/* clicking on the trash can symbol will remove the task */}
      <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash} // can also use faX to display an X instead of a trash can symbol
          onClick={() => deleteTask(task.id)}
      />

    </div>
    </div>
  ));
};

export default DisplayTask;