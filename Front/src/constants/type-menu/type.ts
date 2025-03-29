export interface Category {
  id: number
  title: string
}

export interface SubCategory {
  id: number
  title: string
}

export interface Product {
  id: string | number
  name: string
  price: string | number
  image_url: string
  description: string
  rating: number
  isFavorite: boolean
  qty: number | 0
  coupon?: {
    id: number
    percent: number
  }
}
