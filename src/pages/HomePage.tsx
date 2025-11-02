import { ToDo } from "../models/todo-item"
import { ListItem } from "../components/ListItem/ListItem"


export const HomePage = (props: { todos: ToDo [] }) => {

  return (
    // React Fragment
    <div className="container"> 
      {
        props.todos.map((item: ToDo) => {
          return (
            <ListItem  todo={item}  key={item.id} />
          )
        })

      }
    </div>
  )
}