import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

    const taskobj= useSelector(store=> store);
    
  return (
    <div>
      <h1>Redux - TodoList, Total tasks remained: {taskobj.taskItems.length} </h1>
    </div>
  )
}

export default Navbar
