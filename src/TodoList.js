import React from 'react'
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {

    const taskObj = useSelector(store=>store);
    const taskitems= taskObj.taskItems.map((task,index)=>{

        return(
        <TodoItem 
        key={index}
        task={task}/>
        )
    })
  return (
    <div className='row justify-content-center'>
        <div className='col-md-6'>
            {taskitems}
        </div>
    </div>
  )
}

export default TodoList
