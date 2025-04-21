import HeroTitle from '../components/HeroTitle'
import FeaturedImage from '../components/products/Featured Image'
import ProductsBox from '../components/products/products-box'
import { adminToken } from '../components/token/token'
import { useQuery } from '@tanstack/react-query'
import { IconButton, Button } from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import { deleteImage, uploadImage, setImage } from '../API/products-images/image'
import { useMutation, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const getProducts = async () => {
  const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/admin/products`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken}`,
    }
    , method: 'GET'
  })

  return response.json()
}

const updateProductImage = () => {

}


export default function ProductsLayout() {

  const [openModal, setOpenModal] = useState(false)
  const [productData, setProductData] = useState(null)
  let [newProductImage, setNewProductImage] = useState(null)

  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts()
  })


  const uploadProductImage = useMutation({
    mutationKey: ["upload"],
    mutationFn: ([token, image]: [string, any]) => uploadImage(token, image)
  })


  const setProductImage = useMutation({
    mutationKey: ["set"],
    mutationFn: ([token, id, path]: [string, number, string]) => setImage(token, id, path),

    onSuccess: () => {
      queryClient.invalidateQueries('products')
    }
  })

  const deleteImageFN = useMutation({
    mutationKey: ["delete"],
    mutationFn: ([token, path]: [string, string]) => deleteImage(token, path)

    , onSuccess: () => {
      queryClient.invalidateQueries('products')
    }
  })

  const openModalHandler = (productData: any) => {
    setOpenModal(true)
    setProductData(productData)
  }

  const closeModalHandler = () => {
    setOpenModal(false)
    setProductData(null)
  }

  useEffect(() => {
    if (uploadProductImage.data?.url) {
      setNewProductImage(uploadProductImage.data.url);
    }
  }, [uploadProductImage.data]);


  useEffect(() => {
    if (newProductImage && productData) {
      setProductImage.mutate([adminToken, productData[0], newProductImage]);
    }
  }, [newProductImage]);


  console.log(uploadProductImage.data, uploadProductImage.error)
  console.log(newProductImage)

  return (
    <div className="main-wrapper overflow-auto">
      <HeroTitle name="Products" />
      <FeaturedImage></FeaturedImage>

      <div className="flex flex-wrap gap-x-32 gap-y-10 w-[100%] h-[200px] mt-[30px]">
        {products.data ? products.data.products.map((item: object) => <ProductsBox openModal={openModalHandler} id={undefined} name={undefined} CountStar={undefined} image_url={undefined} category={undefined} subCategory={undefined} price={undefined} {...item}></ProductsBox>) : ''}
      </div>

      <div className={`${openModal ? '' : 'hidden'} w-[500px] h-[300px] fixed flex flex-col z-20 top-0 right-0 bottom-0 left-0 m-auto bg-white rounded-[10px] p-6 transition-all`}>
        <div className="relative flex flex-col w-full justify-center items-center gap-4 mb-4">
          <input type="text" placeholder="نام محصول" className="w-[65%] h-[35px] border-[1px] border-gray-300 rounded-md px-3 outline-none focus:border-blue-500 transition-colors" />
          <input type="text" placeholder="قیمت" className="w-[65%] h-[35px] border-[1px] border-gray-300 rounded-md px-3 outline-none focus:border-blue-500 transition-colors" />

          <CloseIcon className='absolute cursor-pointer top-[0] right-[0] text-[#ff3c3c]' onClick={closeModalHandler}></CloseIcon>
        </div>
        <div className="flex justify-center items-center mb-4">
          <label htmlFor="fileInput" className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors py-2 px-4 rounded-md">
            <UploadFileIcon />
            <span>انتخاب تصویر محصول</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  productData[1] ? deleteImageFN.mutate([adminToken, productData[1]]) : null

                  console.log(productData[1])

                  uploadProductImage.mutate([adminToken, e.target.files[0]])

                }
              }}
            />
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#2877ff',
              color: "white",
              padding: '8px 24px',
              fontFamily: 'inherit',
              '&:hover': {
                backgroundColor: '#1c5cc5',
              }
            }}
            onClick={() => {

            }}
          >
            ثبت تغییرات
          </Button>
        </div>
      </div>

      <div className={`${openModal ? '' : 'hidden'} absolute w-full h-full top-0 right-0 bottom-0 left-0  bg-[#1b1b1b7e] z-10`}>

      </div>

    </div>
  )
}
