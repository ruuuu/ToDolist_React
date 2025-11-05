import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';




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
  



// Для ногово синтакисиса роутинга:
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout />,
    errorElement: <NotFound />,
    children: [       // дочерние элементы будут рендерится на место <Outlet />
      { path: "/", element: <HomePage todos={todos} /> },
      { path: "/todo", element: <ToDoListPage /> },
      { path: "/list/:id", element: <ItemDescription  todos={todos} /> },
    ] 
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/'});  //  basename добавляем чтобы можно было вылодить на GithabPages(тк там есть кроме домена и поддомен /app/)




// точка входа
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
    {/* старый синтакисис роутинга: */}
    {/* <BrowserRouter> 
    <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos}  />} />
        <Route path="/list/:id" element={<ItemDescription  todos={todos} />} />        динамический роутинг
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
    <ToDoListPage />
  </React.StrictMode>
);



