import HeroTitle from '../components/HeroTitle'
import FeaturedImage from '../components/products/Featured Image'
import ProductsBox from '../components/products/products-box'
import { adminToken } from '../components/token/token'
import { useQuery } from '@tanstack/react-query'
import { Button, Alert, Snackbar } from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import { deleteImage, uploadImage, setImage } from '../API/products-images/image'
import productEdit from '../API/product-edit/product-edit'
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
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  let [newProductImage, setNewProductImage] = useState(null)
  const [successAlert, setSuccessAlert] = useState(false)

  const [isInputEmpty, setIsInputEmpty] = useState({
    product: false,
    price: false
  })

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
      setSuccessAlert(prev => !prev)
    }
  })

  const deleteImageFN = useMutation({
    mutationKey: ["delete"],
    mutationFn: ([token, path]: [string, string]) => deleteImage(token, path)

    , onSuccess: () => {
      queryClient.invalidateQueries('products')
    }
  })

  const editProduct = useMutation({
    mutationKey: ["edit"],
    mutationFn: ([token,id,name,price] : [string,number,string,number]) => productEdit(token,id,name,price)

    ,onSuccess: () => {
      setSuccessAlert((prev) => !prev)
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
    setProductName('')
    setProductPrice('')
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

  const inputCheck = () => {
    productName && productPrice ? setIsInputEmpty({
      product: false,
      price: false
    })  : ''

    productName && !productPrice ? setIsInputEmpty({product: false,price: true}) : ''
    productPrice && !productName ? setIsInputEmpty({price: false,product: true}) : ''
  }

  useEffect(() => {
    inputCheck()
  }, [productName, productPrice])

  console.log(editProduct.data)

  return (
    <div className="main-wrapper overflow-auto">
      <HeroTitle name="Products" />
      <FeaturedImage></FeaturedImage>

      {/* Success Alert */}
      <Snackbar
        open={successAlert}
        autoHideDuration={3000}
        onClose={() => setSuccessAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccessAlert(false)}
          severity="success"
          variant="outlined"
          sx={{
            width: '100%',
            fontFamily: 'inherit',
            fontSize: '1rem',
            '& .MuiAlert-icon': {
              marginRight: '8px'
            },
            zIndex: "50"
            ,backgroundColor: 'black'
          }}
        >
          عملیات با موفقیت انجام شد!
        </Alert>
      </Snackbar>

      <div className="flex flex-wrap gap-x-32 gap-y-10 w-[100%] h-[200px] mt-[30px]">
        {products.data ? products.data.products.map((item: object) => <ProductsBox openModal={openModalHandler} id={undefined} name={undefined} CountStar={undefined} image_url={undefined} category={undefined} subCategory={undefined} price={undefined} {...item}></ProductsBox>) : ''}
      </div>

      <div className={`${openModal ? '' : 'hidden'} w-[500px] h-[300px] fixed flex flex-col z-20 top-0 right-0 bottom-0 left-0 m-auto bg-white rounded-[10px] p-6 transition-all`}>
        <div className="relative flex flex-col w-full justify-center items-center gap-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <input
              type="text"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setProductName(e.currentTarget.value || '')
              }}
              value={productName || ''}
              placeholder="نام محصول"
              className="w-[65%] h-[35px] border-[1px] border-gray-300 rounded-md px-3 outline-none focus:border-blue-500 transition-colors"
            />
            {isInputEmpty.product && <p className="text-red-500 text-sm mt-1 self-start ml-[17.5%]">لطفا نام محصول را وارد کنید</p>}
          </div>
          <div className="w-full flex flex-col items-center">
            <input
              type="text"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setProductPrice(e.currentTarget.value || '')
              }}
              value={productPrice || ''}
              placeholder="قیمت"
              className="w-[65%] h-[35px] border-[1px] border-gray-300 rounded-md px-3 outline-none focus:border-blue-500 transition-colors"
            />
            {isInputEmpty.price && <p className="text-red-500 text-sm mt-1 self-start ml-[17.5%]">لطفا قیمت محصول را وارد کنید</p>}
          </div>

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
                if (e.target.files && e.target.files[0] && productData) {
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

              if (productName && productPrice) {
                editProduct.mutate([adminToken,productData[0],productName,productPrice])
              } else if (!productName && productPrice) {
                setIsInputEmpty({ product: true, price: false })

              } else if (!productPrice && productName) {
                setIsInputEmpty({ product: false, price: true })
              } else {
                setIsInputEmpty({ product: true, price: true })
              }

              // setTimeout(() => {
              //   setProductName('')
              //   setProductPrice('')
              // }, 3000);
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
