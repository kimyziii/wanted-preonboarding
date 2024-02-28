import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice'

const rootReducer = combineReducers({
  todo: todoReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
