import React from 'react';
import { useRecoilState } from 'recoil';
import {todoListState} from '../state'
import Form from './Form'
import { useState } from 'react';
import {AddNewItem} from '../addNewItem'

function ListItem(props) {
    const item = props.data
    const index = props.index
    const [todoItem , setTodoItem] = useRecoilState(todoListState)
    const [isShow, setIsShow] = useState(false)

    const handelEdit = (e) => {
        AddNewItem(e,index,setTodoItem,todoItem, item.id ,item.text , true)
    }

    const handelDelete = (e) => {
        e.preventDefault()
        const todo = [...todoItem]
        todo.splice(index , 1)
        setTodoItem(todo)
    }

    return (
        <div className ="container"> 
            <div className = "row">
                <div className = "col-md-8">
                    <h1>{item.text}</h1>
                </div>
                <div className = "col-md-2">
                    <button onClick = {handelEdit}>Edit</button>
                </div>
                <div className = "col-md-2">
                    <button onClick = {handelDelete}>Delete</button>
                </div>
            </div>
            {item.done && <Form  index = {index} data = {item}/>}
        </div>
    );
}

export default ListItem;