import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'



// или декструтукрировать объект props, те ({ todo } : {todo: ToDo})
export const ListItem = (props: {todo: ToDo}) => {

  return (
    <>
      <a className={classes.link}  href={`/list/${props.todo.id}`}> {props.todo.text} </a>
    </>
  )
}