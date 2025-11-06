import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from './feature/todolist'     // импорт редьюсера


export const store = configureStore({
  reducer: {
    todoList: todoReducer // todoReducer сами придумали название такое, todoList это name из todoList.ts 
  },
})





export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch