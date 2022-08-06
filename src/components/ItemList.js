import React from 'react'
import './style.css';

const ItemList = ({itemList, deleteItem}) => {

    

    const checkStyle ={
        backgroundColor: '#c1b3b9',
    }

    return (
        <>
            <div className ="item-container">
                {
                    itemList.map((item, index) =>{
                        return(
                            <div className ="each-item" key={item.id}> 
                                <div className ="check-mark"> 
                                    <div className="check-icon" style ={checkStyle}></div>
                                </div>
                                <h4 className ='item-name'>{item.data}</h4>
                                <div className='icon-container'>
                                    <i className="fa-solid fa-trash-can" onClick={() => deleteItem(item.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemList