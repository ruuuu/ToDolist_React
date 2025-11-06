import { useState } from 'react'
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { createAction, deleteAction, updateAction } from '../feature/todoList'



export const ToDoListPage = () => {


  //const [ todos, setTodos ] = useState<ToDo[]>([]);        // todos-состоняие у которого элементы типа ToDo
   
  const todoList = useSelector((state: RootState) => state.todoList.todos)              // теперь  вытаскиваем состояние todos из хранилища redux, тип RootState взяли из store.ts из export

  const dispatch = useDispatch()               // нужен для вызова методов редьюсера

   



  const createNewToDo = (text: string) => {

    dispatch(createAction(text))         // вызываем метод нашего редьюсера
  };



  const updateToDo = (todoItem: ToDo) => { // todoItem: выбранная задача
      
    dispatch(updateAction(todoItem))
  };



  const deleteToDo = (todoItem: ToDo) => {
    
    dispatch(deleteAction(todoItem))
  };




  return (
    <>
      <Form createNewToDo  = {createNewToDo} />
      
      <ToDoList todos = {todoList}  updateToDo={updateToDo}  deleteToDo={deleteToDo} />
    </>
  )
}