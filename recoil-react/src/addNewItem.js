const AddNewItem = (e,index,setTodoItem, todoItem,id,text,boolen) =>{
    e.preventDefault()
    const todo = [...todoItem]
    const tam = {
        id : id ,
        text : text,
        done : boolen
    }
    todo.splice(index, 1)
    todo.push(tam)
    setTodoItem(todo)
}

export {AddNewItem};