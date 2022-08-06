import React from 'react'
import './style.css';

const ItemList = () => {

    const checkStyle ={
        backgroundColor: '#c1b3b9',
    }
  return (
    <>
        <div className ="item-container">
            <div className ="each-item"> 
                <div className ="check-mark"> 
                    <div className="check-icon" style ={checkStyle}></div>
                </div>
                <h4 className ='item-name'>apple</h4>
                <div className='icon-container'>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>

            <div className ="each-item"> 
                <div className ="check-mark"> 
                    <div className="check-icon" style ={checkStyle}></div>
                </div>
                <h4 className ='item-name'>chocolayesssd</h4>
                <div className='icon-container'>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>

        </div>
    </>
  )
}

export default ItemList