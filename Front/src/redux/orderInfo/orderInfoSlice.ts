import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  address: {},
  deliverOption: 'delivery',
  desc: '',
  cardItems:[]
}
const OrderInfoSlice = createSlice({
    name:'orderInfo',
    initialState,
    reducers:{
      getAddress:(state,action)=>{
        state.address=action.payload
      },
      getOrderOption:(state,action)=>{
        state.deliverOption=action.payload
      },
      getDescription:(state,action)=>{
        state.desc=action.payload
      },
    }
})
export const{getAddress,getOrderOption,getDescription}= OrderInfoSlice.actions
export default OrderInfoSlice.reducer