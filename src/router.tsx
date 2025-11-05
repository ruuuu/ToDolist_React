import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDo } from "./models/todo-item";




const todos: ToDo[] = [     // массив элементов типа ToDo
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе действие',
    isDone: true 
  },
  {
    id: 2,
    text: 'Третье действие',
    isDone: false 
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true 
  }
];
  



// Для нового синтаксиса роутинга:
export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout />,
    errorElement: <NotFound />,
    children: [       // на дочерних роутах дочерние элементы будут рендерится вместо <Outlet /> (Layout.tsx)
      { path: "/", element: <ToDoListPage />  },
      { path: "/list", element: <ViewList todos={todos} /> },
      { path: "/list/:id", element: <ViewListItem  todos={todos} /> }  
    ] 
  },
  {
    path: '*',
    element: <NotFound />
  }
],); //{ basename: '/app/'}  //  basename добавляем чтобы можно было вылодить на GithabPages(тк там есть кроме домена и поддомен /app/)

