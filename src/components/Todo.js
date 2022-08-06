import React, { useEffect, useState } from 'react'
import HeadIcon from './HeadIcon';
import InputForm from './InputForm';
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

    //function to update States

    const updateItemInput = (value) =>{
        setItemInput(value)
    }

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
            <InputForm itemInput ={itemInput} updateItemInput ={updateItemInput} addItem={addItem}/>
            <ItemList itemList ={itemList} deleteItem={deleteItem} checkListItem ={checkListItem} />
        </div>
        </>
    )
}

export default Todo