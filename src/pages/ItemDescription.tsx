import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"




interface ComponentProps {
   todos: ToDo[]
}



//                                    { todos: ToDo [] }
export const ItemDescription = (props: ComponentProps) => {


  const { id } = useParams()    // достает динамические паратмеры из ула страницы (это id из урла старницы path="/list/:id" (из роутинга index.tsx))
  const navigate = useNavigate() // хук котрый переводит страницу на др урл
  const [ todo, setTodo ] = useState<ToDo>()



  
  useEffect(() => {             // хук будет вызван во время инициализации и монтирования этого компонента 
    const searchTodo = props.todos.find((item) => item.id === Number(id))

    if(searchTodo){
      setTodo(searchTodo)   // т е todo = searchTodo
    }else{
      navigate('/404') // ведет на '/404'
    }
  }, [props.todos, id, navigate]); // отрабоатает мин 1 раз при загрузке страницы и когда измениится хотя бы один парамтер из массива
// при изменении props.todos, id, navigate  будет перерисовываться этот компонент(если мы еще будем на этой странице)





  return (
    <div className="container">
      <h1> {todo?.text} </h1>
    </div>
  )
}