import React from 'react'
import './style.css';

const InputForm = (props) => {
  return (
    <>
       <div className="input-form-container">
            <div className ="input-container">
                <input type="text" placeholder='Item Name' value ={props.itemInput} onChange={(event) =>{props.updateItemInput(event.target.value)}}/>
            </div> 
            <div className='add-icon-container' onClick={props.addItem}><i className="fa-solid fa-plus"></i></div>
        </div>
    </>
  )
}

export default InputForm
