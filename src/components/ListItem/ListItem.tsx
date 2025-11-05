import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'



// или декструтукрировать объект props, те ({ todo } : {todo: ToDo})
export const ListItem = (props: { todo: ToDo }) => {

  return (
    <>
      <Link className={`${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}`}  to={`/list/${props.todo.id}`}> {props.todo.text} </Link>
    </>
  )
}