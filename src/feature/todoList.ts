import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'




export interface ToDoState { // интерфес хранилища
  todos: ToDo[] // todos-состояние(state) котрый хранится в store
}

const initialState: ToDoState = {
  todos: [],  // нач значение состояния(state) todos
}



export const todoSlice = createSlice({ // редьюсер
  name: 'todoReducer',             // имя редьюсера
  initialState,             // нач состоняие (т е пустой массив)
  reducers: {              // редьсер это методы(createAction, updateAction, deleteAction) котрые меняют состояние(state) todos
    createAction: (state, action) => {          // action
        const newToDo = {
          id: state.todos.length,
          text: action.payload,                 // передаваемые параметры в метод хрантяся в action.payload 
          isDone: false
        }

        state.todos = [...state.todos,  newToDo] // обновлем массив-переменную состояния todos
    },

    updateAction: (state, action) => {          // action
        const newToDos = state.todos.map((item) => {
            if(item.id === action.payload.id){          // todoItem из action.payload
              item.isDone = !item.isDone 
            }

            return item
        });
        
        state.todos = newToDos

    },

    deleteAction: (state, action: PayloadAction<number>) => {       // action
      

    },
  },
})





export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer