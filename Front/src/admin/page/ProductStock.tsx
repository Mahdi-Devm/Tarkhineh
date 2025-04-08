import HeroTitle from '../components/HeroTitle'
import ProductDataGrid, {
  rows,
  columns,
} from '../components/Product stock/Productstock'
function ProductStock() {
  return (
    <div>
      <HeroTitle name="Product stock" />
      <ProductDataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default ProductStock
