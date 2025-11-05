import { ToDo } from "../models/todo-item"
import { ListItem } from "../components/ListItem/ListItem"



interface ComponentProps {
   todos: ToDo[]
}



//                     вместо props декмпозируя можно писать{ todos },  вместо { todos: ToDo [] } можно писать ComponentProps
export const ViewList = (props: ComponentProps) => {

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