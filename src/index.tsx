import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';




// точка входа
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoListPage />} />
      </Routes>
    </BrowserRouter>
    <ToDoListPage />
  </React.StrictMode>
);



