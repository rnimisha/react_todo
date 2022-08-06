import React, { useEffect, useState } from 'react'
import HeadIcon from './HeadIcon';
import ItemList from './ItemList';
import './style.css';

//fetch list from local storage
const fetchLocalData = () =>{
    const fetchedList = localStorage.getItem("todolist");

    if(fetchedList){
        return JSON.parse(fetchedList);
    }
    else{
        return []; 
    }
}

const Todo = () => {

    const [itemInput, setItemInput] =useState("");
    const [itemList, setItemList] =useState(fetchLocalData());

    // adds item from form to the array list
    const addItem = () =>{
        if(!itemInput)
        {
            return;
        }
        const newData ={
            id : new Date().getTime().toString(),
            data : itemInput,
            checked : false
        }
        setItemList([...itemList, newData]);

        //clear input field
        setItemInput("");
    }

    //deletes item from the list
    const deleteItem = (id) =>{
        const list = itemList.filter((item) =>{
            return id !== item.id
        })
        setItemList(list)
    }

    //change checked value function
    const checkListItem = (index, bool) =>{
        const notBool = (!bool)
        const list = itemList.map( (item) =>{
            return item.id === index ? {id : item.id, data: item.data, checked : notBool} : item
        })
        setItemList(list);
    }

    useEffect( () => {
        localStorage.setItem("todolist", JSON.stringify(itemList))
    },[itemList])

    return (
        <>
        <div className ='todo-container'>
            <HeadIcon/>
            <div className="input-form-container">
                <div className ="input-container">
                    <input type="text" placeholder='Item Name' value ={itemInput} onChange={(event) =>{setItemInput(event.target.value)}}/>
                </div> 
                <div className='add-icon-container' onClick={addItem}><i className="fa-solid fa-plus"></i></div>
            </div>
            <ItemList itemList ={itemList} deleteItem={deleteItem} checkListItem ={checkListItem}/>
        </div>
        </>
    )
}

export default Todo