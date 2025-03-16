import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../pages/MenuPage'

interface InitialState {
  amount: number
  products: Product[]
}
const initialState: InitialState = {
  products: [],
  amount: 0,
}

const shopCardSlice = createSlice({
  name: 'cardItems',
  initialState,
  reducers: {
    addProduct:(state,action)=>{
        state.products.push(...action.payload)
    }
  },
})

export default shopCardSlice.reducer
