import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  address: {},
  orderOption: 'delivery',
  desc: '',
  cardItems:[]
}
const OrderInfoSlice = createSlice({
    name:'orderInfo',
    initialState,
    reducers:{
      getAddress:(state,action)=>{
        state.address=action.payload
      }
    }
})
export const{getAddress}= OrderInfoSlice.actions
export default OrderInfoSlice.reducer