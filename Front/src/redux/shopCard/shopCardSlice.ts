import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../pages/MenuPage'

interface InitialState {
  amount: number
  discount: number
  products: Product[]
}

// get product from local if exists
const savedItems = (): Product[] => {
  const stringItems = localStorage.getItem('cardItems')
  if (!stringItems) return []
  const savedProducts = JSON.parse(stringItems)
  const { products } = savedProducts
  console.log(products)
  return products
}
const savedamount = (): number => {
  const stringItems = localStorage.getItem('cardItems')
  if (!stringItems) return 0
  const savedProducts = JSON.parse(stringItems)
  const { amount } = savedProducts
  return amount
}
const savedDiscount = (): number => {
  const stringItems = localStorage.getItem('cardItems')
  if (!stringItems) return 0
  const savedProducts = JSON.parse(stringItems)
  const { discount} = savedProducts
  return discount
}

const initialState: InitialState = {
  products: savedItems(),
  amount: savedamount(),
  discount: savedDiscount(),
}

const shopCardSlice = createSlice({
  name: 'cardItems',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      //check if payload product is in basket
      const existingItem = state.products.find(
        (product) => product.id === action.payload.id,
      )
      if (existingItem) {
        state.amount += parseFloat(existingItem.price)
        //increase quantity of existing product
        existingItem.qty++
        // increase discount value
        if (action.payload.coupon)
          state.discount +=
            (+existingItem.price * existingItem.coupon.percent) / 100
      } else {
        state.products.push({ ...action.payload, qty: 1 })
        state.amount += parseFloat(action.payload.price)

        if (action.payload.coupon)
          state.discount +=
            (+action.payload.price * action.payload.coupon.percent) / 100
      }

      localStorage.setItem('cardItems', JSON.stringify(state))
    },
    removeProduct: (state, action) => {
      const existingItem = state.products.find(
        (product) => product.id === action.payload.id,
      )

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty--
        state.amount -= parseFloat(existingItem.price)
        if (action.payload.coupon)
          state.discount -=
            (+existingItem.price * existingItem.coupon.percent) / 100
      } else {
        state.products = state.products.filter(
          (p) => p.id !== action.payload.id,
        )
        state.amount -= parseFloat(action.payload.price)
        if (action.payload.coupon)
          state.discount -=
            (+action.payload.price * action.payload.coupon.percent) / 100
      }
      localStorage.setItem('cardItems', JSON.stringify(state))
    },
  },
})
export const { addProduct, removeProduct } = shopCardSlice.actions
export default shopCardSlice.reducer
