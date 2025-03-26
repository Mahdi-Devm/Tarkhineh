import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../pages/MenuPage'

interface InitialState {
  amount: number
  discount: number
  total: number
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
  const { discount } = savedProducts
  return discount
}
const savedTotal = (): number => {
  const stringItems = localStorage.getItem('cardItems')
  if (!stringItems) return 0
  const savedProducts = JSON.parse(stringItems)
  const { total } = savedProducts
  return total
}

const initialState: InitialState = {
  products: savedItems(),
  amount: savedamount(),
  discount: savedDiscount(),
  total: savedTotal(),
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
        if (action.payload.coupon) {
          state.discount +=
            (+existingItem.price * existingItem.coupon.percent) / 100
          state.total +=
            parseFloat(existingItem.price) -
            (+existingItem.price * existingItem.coupon.percent) / 100
        } else state.total += parseFloat(existingItem.price)
      } else {
        state.products.push({ ...action.payload, qty: 1 })
        state.amount += parseFloat(action.payload.price)

        if (action.payload.coupon) {
          state.discount +=
            (+action.payload.price * action.payload.coupon.percent) / 100
          state.total +=
            parseFloat(action.payload.price) -
            (+action.payload.price * action.payload.coupon.percent) / 100
        } else state.total += parseFloat(action.payload.price)
      }

      localStorage.setItem('cardItems', JSON.stringify(state))
    },
    removeProduct: (state, action) => {
      const existingItem = state.products.find(
        (product) => product.id === action.payload.id,
      )

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty--
        state.amount -= +(existingItem.price)
        if (action.payload.coupon) {
          state.discount -=
            (+existingItem.price * existingItem.coupon!.percent) / 100
          state.total -=
            +(existingItem.price) -
            (+existingItem.price * existingItem.coupon.percent) / 100
        } else state.total -= +(existingItem.price)
      } else {
        //if there is only one
        state.products = state.products.filter(
          (p) => p.id !== action.payload.id,
        )
        state.amount -= parseFloat(action.payload.price)
        if (action.payload.coupon) {
          state.discount -=
            (+action.payload.price * action.payload.coupon.percent) / 100
          state.total -=
            parseFloat(action.payload.price) -
            (+action.payload.price * action.payload.coupon.percent) / 100
        } else state.total -= parseFloat(action.payload.price)
      }
      localStorage.setItem('cardItems', JSON.stringify(state))
    },
    clearBasket: (state) => {
      state.amount = 0
      state.discount = 0
      state.products = []
      state.total = 0
      localStorage.removeItem('cardItems')
    },
    clearProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload.id)
      state.amount -= +(action.payload.price) * action.payload.qty
      if (action.payload.coupon) {
        state.discount -=
          ((+action.payload.price * action.payload.coupon!.percent) / 100) *
          action.payload.qty
        state.total -=
          (+(action.payload.price) -
            (+action.payload.price * action.payload.coupon!.percent) / 100) *
          action.payload.qty
      } else
        state.total -= +(action.payload.price) * action.payload.qty
      localStorage.setItem('cardItems', JSON.stringify(state))
    },
    handleCouponDiscount: (state, action) => {
      const { disCount } = action.payload
      state.discount = disCount
      state.total = state.amount - disCount
    },
  },
})
export const {
  handleCouponDiscount,
  addProduct,
  clearProduct,
  removeProduct,
  clearBasket,
} = shopCardSlice.actions
export default shopCardSlice.reducer
