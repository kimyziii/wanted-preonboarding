import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type InitialStateType = {
  todo: TodoType[]
}

type TodoType = {
  value: string
  id: string
}

const initialState: InitialStateType = {
  todo: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<TodoType>) => {
      const { value, id } = action.payload
      state.todo.push({ value, id })
    },

    DELETE_TODO: (state, action: PayloadAction<string>) => {
      const filtered = state.todo.filter((td) => td.id !== action.payload)
      state.todo = filtered
    },
  },
})

export const { ADD_TODO, DELETE_TODO } = todoSlice.actions
export const selectTodos = (state: RootState) => state.todo.todo

export default todoSlice.reducer
