import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

function TodoItem({task}) {
    
    const[show,setShow]=useState('none');
    
   
    const [newTask,setnewTask]=useState('');
    const dispatch = useDispatch();
    function editTask(){

        setShow('inline');
    }
function deleteTask(task){

    dispatch({type:'DELETE_TASK', payload:task})
}

function finalEdit(task){
    dispatch({type:'EDIT_TASK', payload:{oldtask:task, newtask:newTask}})
    setShow('none');
}

    return (
    
     
     <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h1>{task}</h1>
            </div>
            <div className='col-md-1'>
                    <button onClick={editTask()} className='btn btn-secondary'>EDIT</button>
            </div>
            <div className='col-md-1'>
                    <button onClick={deleteTask(task)} className='btn btn-danger'>DELETE</button>
            </div>
            
            <input type="text" style={{display:show}} value={newTask} onChange={(e)=>{setnewTask(e.target.value)}} /> 
            <button onClick={finalEdit(task)} style={{display:show}} className='btn btn-success m-1'>EDIT</button>
    
            </div>
    
  );
}

export default TodoItem;
