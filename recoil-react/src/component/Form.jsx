import React from 'react';
import ListItem from './ListItem';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {todoListState} from '../state'
import {AddNewItem} from '../addNewItem'

function Form(props) {
    const item = props.data
    const index = props.index
    console.log(item);
    const [inputEdit , setInputEdit] = useState(item.text)
    const[todoItem, setTodoItem] = useRecoilState (todoListState) 

    const handelChange = (e) => {
        setInputEdit(e.target.value)
    }
    const handelYes = (e) => {
        AddNewItem(e,index, setTodoItem, todoItem ,item.id , inputEdit ,true)
        setInputEdit('')
    }

    const handelNo = (e) => {
        AddNewItem(e,index, setTodoItem, todoItem ,item.id , item.text ,false)
    }

    return (
        <form>
            <input value = {inputEdit} onChange = {handelChange}></input>
            <button onClick = {handelYes}>Yes</button>
            <button onClick = {handelNo}>No</button>
        </form>
    );
}

export default Form;