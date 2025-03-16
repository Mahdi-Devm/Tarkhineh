import { configureStore } from '@reduxjs/toolkit'
import shopCardReducer from './shopCard/shopCardSlice'
export const store = configureStore({
  reducer: {
    cardReducer: shopCardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
