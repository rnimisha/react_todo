import React from 'react'
import './style.css';

const ItemList = ({itemList, deleteItem, checkListItem}) => {

    const checkStyle ={
        backgroundColor: '#c1b3b9'
    }
    const unCheckStyle ={
        backgroundColor: '#fff'
    }

    const strikeTextStyle = {
        textDecoration : 'line-through',
        color : '#b4afaf'
    }
    const unStrikeTextStyle = {
        textDecoration : 'none',
        color : '#000'
    }

    return (
        <>
            <div className ="item-container">
                {
                    itemList.map((item, index) =>{
                        return(
                            <div className ="each-item" key={item.id}> 
                                <div className ="check-mark"> 
                                    <div className="check-icon" onClick={() => checkListItem(item.id, item.checked)} style = {item.checked === true ? checkStyle : unCheckStyle} ></div>
                                </div>
                                <h4 className ='item-name' style={item.checked === true ? strikeTextStyle : unStrikeTextStyle}>{item.data}</h4>
                                <div className='icon-container'>
                                    <i className="fa-solid fa-trash-can"  onClick={() => deleteItem(item.id)}></i>
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