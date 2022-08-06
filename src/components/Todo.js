import React from 'react'
import ItemList from './ItemList';
import './style.css';

const Todo = () => {
  return (
    <>
    <div className ='todo-container'>
        <div className="todo-top-icon-container">
            <img className="todo-icon" src="images/todo-cute-icon.png" alt="" />
        </div>
        <div className="input-form-container">
            <div className ="input-container">
                <input type="text" placeholder='Item Name'/>
            </div> 
            <div className='add-icon-container'><i class="fa-solid fa-plus"></i></div>
        </div>
        <ItemList/>
    </div>
    </>
  )
}

export default Todo