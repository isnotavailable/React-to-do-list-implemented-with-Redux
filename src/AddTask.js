import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';   
    
function AddTask() {
   
   const dispatch= useDispatch();
   const taskobj=useSelector(store=>store);
    const [taskName,setTaskName]=useState();

    function addTask(){
        
        dispatch({type:'ADD_TASK',payload: taskName});
        
    }
  return (

    <div>
      <h1>Add Task Component</h1>

      <div className="row justify-content-center">
        <div className='col-md-6'>

            <input type="text" className='form-control w-75' style={{display:'inline'}} value={taskName} placeholder='Tasknames'onChange={(e)=>{setTaskName(e.target.value)}}/>
            <button onClick={addTask} className='btn btn-success'>
                ADD TASK
            </button>
        </div>
      </div>
    </div>
  )
}

export default AddTask;
