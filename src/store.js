import { configureStore } from '@reduxjs/toolkit'
import kitsReducer from './features/kitsSlice'
import kitReducer from './features/kitSlice'

export const store = configureStore({
  reducer: {
    kits: kitsReducer,
    selectedKit: kitReducer
  }
})