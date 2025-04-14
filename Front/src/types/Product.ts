export interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
  TotalStars: number
  CountStar?: number
  description?: string
  isFavorite?: boolean
  qty?: number
  coupon?: {
    id: number
    percent: number
  }
}
