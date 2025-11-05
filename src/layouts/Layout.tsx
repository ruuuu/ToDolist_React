import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";



// Для нового синтаксиса роутинга:
export const Layout = () => {

  return (
    <>
      <Header />   {/* общий компонент всех страниц */}
      <Outlet />   {/* место куда будут рендериться компонеты ToDolistPage или ViewList или ViewListItem в зависимости от роутинга */}
    </>
  )
};