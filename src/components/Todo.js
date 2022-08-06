import React, { useState } from 'react'
import HeadIcon from './HeadIcon';
import ItemList from './ItemList';
import './style.css';

const Todo = () => {

    const [itemInput, setItemInput] =useState("");
    const [itemList, setItemList] =useState(['a','b','c']);

    return (
        <>
        <div className ='todo-container'>
            <HeadIcon/>
            <div className="input-form-container">
                <div className ="input-container">
                    <input type="text" placeholder='Item Name' value ={itemInput} onChange={(event) =>{setItemInput(event.target.value)}}/>
                </div> 
                <div className='add-icon-container'><i class="fa-solid fa-plus"></i></div>
            </div>
            <ItemList itemList ={itemList}/>
        </div>
        </>
    )
}

export default Todo