import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item" // импорт интерфеса





export const ToDoList = (props: { todos: ToDo [], updateToDo: Function, deleteToDo: Function }) => { // массив у корого элементы типа ToDo

  

  const checkedList = () => {     // список невыполненных задач

    return props.todos
              .filter((item) => !item.isDone)
              .map((item, i) => {
                return <ToDoListItem  toDoItem={item}  updateToDo={props.updateToDo}  deleteToDo={props.deleteToDo}  key={i} />  // toDoItem это аргумент функции ToDoListItem 
              });
  };
  


  const unCheckedList = () => {     // список выполненных задач

    return props.todos
              .filter((item) => item.isDone)
              .map((item, i) => {
                return <ToDoListItem  toDoItem={item}  updateToDo={props.updateToDo}  deleteToDo={props.deleteToDo}  key={i}/>  // toDoItem это аргумент функции ToDoListItem 
              });
  };
  

  

  return (
      <div className="todo-container">
          <ul className="todo-list failed">
            {  checkedList() }
          </ul>
          <ul className="todo-list completed">
            { unCheckedList() }
          </ul>
      </div>
  )
}