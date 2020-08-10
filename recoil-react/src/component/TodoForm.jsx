import React from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {todoListState} from '../state'
import { useSetRecoilState } from 'recoil';

function TodoForm(props) {
    const [inputValue , setInputValue] = useState('')
    const setTodoItem = useSetRecoilState(todoListState)

    const handelChange = (e) => {
        setInputValue(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        const getValue = inputValue.trim()
        if(getValue){
            setTodoItem ( (oldTodo) => {
                return [
                ...oldTodo,
                {
                    id : Math.random().toString(),
                    text : getValue,
                    done : false
                }
            ]})
        }
        setInputValue('')
    }

    return (
        <form className = 'todo-form' onSubmit = {handelSubmit}>
            <input type = "text" value = {inputValue} onChange = {handelChange}/>
            <input type = "submit"  value = 'add'/>
        </form>
    );
}

export default TodoForm;