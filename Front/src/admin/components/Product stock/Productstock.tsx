import React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ColorCircle from '../../../constants/ColorCircle'
import ActionButtons from '../../../constants/ActionButtons'

import products1Logo from '../../assets/images/ProductStock/Image.png'
import products2Logo from '../../assets/images/ProductStock/Image1.png'
import products3Logo from '../../assets/images/ProductStock/Image2.png'
import products4Logo from '../../assets/images/ProductStock/Image3.png'
import products5Logo from '../../assets/images/ProductStock/Image4.png'

const rows = [
  {
    id: 1,
    image: products1Logo,
    productName: 'Apple Watch Series 4',
    category: 'Electronics',
    price: 100,
    piece: 10,
    availableColor: ['Red', 'Green', 'Blue', 'Purple'],
  },
  {
    id: 2,
    image: products2Logo,
    productName: 'Microsoft Headsquare',
    category: 'Clothing',
    price: 200,
    piece: 15,
    availableColor: ['Blue', 'Yellow', 'Orange', 'Pink'],
  },
  {
    id: 3,
    image: products3Logo,
    productName: 'Women’s Dress',
    category: 'Furniture',
    price: 150,
    piece: 8,
    availableColor: ['Green', 'Orange', 'Yellow', 'Red'],
  },
  {
    id: 4,
    image: products4Logo,
    productName: 'Samsung A50',
    category: 'Sports',
    price: 80,
    piece: 20,
    availableColor: ['Yellow', 'Purple', 'Blue', 'Green'],
  },
  {
    id: 5,
    image: products5Logo,
    productName: 'Camera',
    category: 'Toys',
    price: 250,
    piece: 5,
    availableColor: ['Pink', 'Blue', 'Red', 'Purple'],
  },
]

type Product = {
  id: number
  image: string
  productName: string
  price: number
  category: string
  piece: number
  availableColor: string[]
}

export const columns = (handleDelete: (id: number) => void): GridColDef[] => [
  {
    field: 'image',
    headerName: 'Image',
    width: 100,
    renderCell: (params: GridRenderCellParams<Product>) => (
      <img src={params.row.image} alt="Product" width="50" height="50" />
    ),
  },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 180,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'piece',
    headerName: 'Piece',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'availableColor',
    headerName: 'Available Color',
    width: 150,
    editable: true,
    renderCell: (params: GridRenderCellParams<Product>) => {
      const colors = Array.isArray(params.row.availableColor)
        ? params.row.availableColor
        : ['gray']
      return <ColorCircle colors={colors} />
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams<Product>) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <ActionButtons handleDelete={handleDelete} params={params} />
      </Box>
    ),
  },
]

const ProductDataGrid: React.FC = () => {
  const rowsData = rows

  const handleDeleteClick = (id: number) => {
    console.log('Product to delete:', id)
  }

  return (
    <Box sx={{ height: 480, width: '100%', p: 2, backgroundColor: '#fff' }}>
      <DataGrid
        rows={rowsData}
        columns={columns(handleDeleteClick)}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default ProductDataGrid
