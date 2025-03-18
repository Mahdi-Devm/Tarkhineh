// store.js
import { configureStore } from '@reduxjs/toolkit';
import shopCardReducer from './shopCard/shopCardSlice';
import OrderInfoReducer from './orderInfo/orderInfoSlice';

export const store = configureStore({
  reducer: {
    cardReducer: shopCardReducer,
    orderInfo: OrderInfoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;