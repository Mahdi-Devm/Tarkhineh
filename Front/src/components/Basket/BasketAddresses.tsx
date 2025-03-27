import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { getAddress } from '../../redux/orderInfo/orderInfoSlice'
import Map from './Map'

export interface AddressData {
  latitude: string
  longitude: string
  address: string
  id: number
}

const BasketAddresses = () => {
  const dispatch = useDispatch()
  const [addressOpen, setAddressOpen] = useState(false)
  const [addresses, setAddresses] = useState<AddressData[]>([])
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: ''
  })
  
  const { handleSubmit, register, reset, formState: { errors } } = useForm<AddressData>()

  const fetchAddresses = async () => {
    try {
      const token = Cookies.get('accessToken')
      const res = await fetch('http://localhost:3000/api/v1/client/address', {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      setAddresses(data)
    } catch (error) {
      console.error('خطا در دریافت آدرس‌ها:', error)
    }
  }

  useEffect(() => {
    fetchAddresses()
  }, [])

  const submitHandler = async (data: AddressData) => {
    try {
      const addressData = {
        ...data,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      }

      if (!coordinates.latitude || !coordinates.longitude) {
        alert('لطفاً روی نقشه یک مکان را انتخاب کنید')
        return
      }

      const token = Cookies.get('accessToken')
      const res = await fetch('http://localhost:3000/api/v1/client/address', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addressData),
      })

      if (!res.ok) {
        throw new Error('خطا در ارسال آدرس')
      }

      // دریافت مجدد لیست آدرس‌ها از سرور
      await fetchAddresses()
      
      reset()
      setAddressOpen(false)
      
    } catch (error) {
      console.error('خطا در ارسال آدرس:', error)
      alert('خطا در ارسال آدرس')
    }
  }

  const deleteAddress = async (id: number) => {
    try {
      const token = Cookies.get('accessToken')
      const res = await fetch(`http://localhost:3000/api/v1/client/address/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        throw new Error('خطا در حذف آدرس')
      }

      // دریافت مجدد لیست آدرس‌ها از سرور
      await fetchAddresses()
      
    } catch (error) {
      console.error('خطا در حذف آدرس:', error)
      alert('خطا در حذف آدرس')
    }
  }

  return (
    <>
      <div className="divide space-y-3 divide-y divide-zinc-300 rounded-md border border-zinc-400 p-4">
        <div className="mb-4 flex justify-between pb-2">
          <button
            className="text-green-900"
            onClick={() => setAddressOpen(!addressOpen)}
          >
            افزودن آدرس
          </button>
          <p>آدرس‌ها</p>
        </div>
        
        {addresses?.length > 0 ? (
          addresses?.map((address) => (
            <label
              onClick={() => dispatch(getAddress(address))}
              htmlFor={`address-${address.id}`}
              key={address.id}
              className="flex justify-between gap-3 bg-amber-100"
            >
              <input
                type="radio"
                name="address"
                className="bg-red-200"
                id={`address-${address.id}`}
              />
              <div className="flex w-full justify-between p-3">
                <div>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteAddress(address.id)
                    }}
                    className="ml-2"
                  >
                    🗑
                  </button>
                </div>
                <p>{address.address}</p>
              </div>
            </label>
          ))
        ) : (
          <div className="flex items-center justify-center">
            آدرسی وجود ندارد
          </div>
        )}
      </div>

      {addressOpen && (
        <div className="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-black/65">
          <div className="flex h-[70%] max-h-[600px] w-[90%] flex-col overflow-hidden overflow-y-auto rounded-lg bg-white sm:max-w-[500px]">
            <h1 className="relative bg-zinc-200 py-4 text-center font-semibold">
              ثبت آدرس
              <button
                className="absolute right-4"
                onClick={() => setAddressOpen(false)}
              >
                ×
              </button>
            </h1>
            
            <div className="h-64">
              <Map setCoordinates={setCoordinates} />
            </div>
            
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex h-full w-full flex-col gap-3 mt-5 p-4 text-right"
            >
              <div>
                <input
                  {...register('address', { required: 'آدرس الزامی است' })}
                  id="address"
                  className="w-full rounded-md border text-right border-zinc-300 p-2"
                  placeholder="آدرس دقیق شما"
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <button 
                type="submit"
                className="mt-auto bg-green-900 p-2 text-white hover:bg-green-700"
              >
                ثبت آدرس
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default BasketAddresses