import React from 'react';
import { useRecoilValue ,useRecoilState} from 'recoil';
import {todoListState} from '../state'
import ListItem from './ListItem';

function TodoList(props) {
    const [todolist, setTodoList] = useRecoilState(todoListState)
    return (
        <div className = "list-data">
            {todolist.map( (todo , index) => {
            return(
                <ListItem index = {index} key = {todo.id} data = {todo}/>
            )
        })}
        </div>
    );
}

export default TodoList;