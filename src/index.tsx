import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';




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
]
  



// точка входа
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos}  />} />
        <Route path="/list/:id" element={<ItemDescription  todos={todos} />} />        {/* динамический роутинг */}
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <ToDoListPage />
  </React.StrictMode>
);



