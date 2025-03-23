import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: {},
  deliverOption: 'delivery',
  paymentOption: '',
  desc: '',
  cardItems: [],
  payLink:''
}
const OrderInfoSlice = createSlice({
  name: 'orderInfo',
  initialState,
  reducers: {
    getAddress: (state, action) => {
      state.address = action.payload
    },
    getOrderOption: (state, action) => {
      state.deliverOption = action.payload
    },
    getDescription: (state, action) => {
      state.desc = action.payload
    },
    getPaymentOption: (state, action) => {
      console.log('pay with',action.payload)
      state.paymentOption = action.payload
    },
    getPayLink:(state, action) => {
      console.log('pay with',action.payload)
      state.payLink = action.payload
    },
  },
})
export const { getAddress,getPayLink,getPaymentOption, getOrderOption, getDescription } =
  OrderInfoSlice.actions
export default OrderInfoSlice.reducer
