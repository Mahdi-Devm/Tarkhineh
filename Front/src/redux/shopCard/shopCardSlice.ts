import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../pages/MenuPage'

interface InitialState {
  amount: number
  products: Product[]
}

// get product from local if exists
const savedItems=():Product[] =>{
  const stringItems=localStorage.getItem('cardItems')
  if (!stringItems) return []
  const savedProducts=JSON.parse(stringItems)
  const {products}=savedProducts
  return [...products,products.map(p=>parseFloat(p.price))]
}
const savedamount=():number =>{
  const stringItems=localStorage.getItem('cardItems')
  if (!stringItems) return 0
  const savedProducts=JSON.parse(stringItems)
  const {amount}=savedProducts
  return parseFloat(amount)
}

const initialState: InitialState = {
  products: savedItems(),
  amount: savedamount(),
}

const shopCardSlice = createSlice({
  name: 'cardItems',
  initialState,
  reducers: {
    addProduct:(state,action)=>{
        const existingItem =state.products.find(product=>product.id===action.payload.id)
        if (existingItem) {
          state.amount+=existingItem.price 
          existingItem.qty++
          console.log('updated item',state)
        }
        else {state.products.push({...action.payload,qty:1})
        state.amount+=parseFloat(action.payload.price)
        localStorage.setItem('cardItems',JSON.stringify(state))
        console.log('updated item')

    }
    
    },
    removeProduct:(state,action)=>{
         const existingItem =state.products.find(product=>product.id===action.payload.id)
        
        if (existingItem&& existingItem.qty>1) {existingItem.qty--
            state.amount -=(existingItem.price)
        }
       else {state.products= state.products.filter(p=>p.id!==action.payload.id)}
        console.log('item deleted:',action.payload)
    }
  },
})
export const {addProduct,removeProduct}=shopCardSlice.actions
export default shopCardSlice.reducer
