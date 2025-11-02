import { useState } from 'react'
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"



export const ToDoListPage = () => {


  const [ todos, setTodos ] = useState<ToDo[]>([         // массив у корого элементы типа ToDo
    {       // тип объекта - ToDo
      id: 0,
      text: 'Первая задача',
      isDone: true 
    },
    {       
      id: 1,
      text: 'Вторая задача',
      isDone: false // не выполненная задача
    },
    {       
      id: 2,
      text: 'Третья задача',
      isDone: true
    }
  ]);

   



  const createNewToDo = (text: string) => {

    const newToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }


    setTodos([...todos,  newToDo ]) // обновлем массив-переменную состояния todos
  };



  const updateToDo = (todoItem: ToDo) => { // todoItem: выбранная задача
      const newToDos = todos.map((item) => {
          if(item.id === todoItem.id){
            item.isDone = !item.isDone 
          }

          return item
      });
      
      setTodos(newToDos)
  };



  const deleteToDo = (todoItem: ToDo) => {
    const newToDos = todos.filter((item) => item.id !== todoItem.id);

    setTodos(newToDos)
  };



  return (
    <>
      <Form createNewToDo  = {createNewToDo} />
      
      <ToDoList todos = {todos}  updateToDo={updateToDo}  deleteToDo={deleteToDo} />
    </>
  )
}