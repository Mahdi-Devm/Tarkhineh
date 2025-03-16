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
        const existingItem =state.products.find(product=>product.id===action.payload.id)
        if (existingItem) {
                state.amount+=(existingItem.price*existingItem.qty)
                existingItem.qty++
        }
        else {state.products.push({...action.payload,qty:1})
            state.amount+=parseFloat(action.payload.price)
    }
    
    },
    removeProduct:(state,action)=>{
         const existingItem =state.products.find(product=>product.id===action.payload.id)
        
        if (existingItem&& existingItem.qty>1) {existingItem.qty--
            state.amount -=(existingItem.price*existingItem.qty)
        }
       else {state.products= state.products.filter(p=>p.id!==action.payload.id)}
        console.log('item deleted:',action.payload)
    }
  },
})
export const {addProduct,removeProduct}=shopCardSlice.actions
export default shopCardSlice.reducer
