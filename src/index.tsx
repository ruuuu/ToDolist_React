import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ViewListItem } from './pages/ViewListItem';
import { Layout } from './layouts/Layout';
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'










// точка входа
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <React.StrictMode>
    <Provider store={store}>              {/*  store-хранилище состояния, Provider дает доступ до хранидища состояния*/}
      <RouterProvider  router={router} />
      {/* старый синтакисис роутинга: */}
      {/* <BrowserRouter> 
      <Header />
        <Routes>
          <Route path="/" element={<ViewListPage todos={todos}  />} />
          <Route path="/list/:id" element={<ItemDescription  todos={todos} />} />        динамический роутинг
          <Route path="/todo" element={<ToDoListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);



