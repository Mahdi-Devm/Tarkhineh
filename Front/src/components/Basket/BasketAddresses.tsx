import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { RootState } from '../../redux/store'
import { getAddress } from '../../redux/orderInfo/orderInfoSlice'
export interface AddressData {
  title: string
  receiveBySelf: boolean
  phone: string
  address: string
}

const BasketAddresses = () => {
  const selectedAddress = useSelector(
    (state: RootState) => state.orderInfo.address,
  )
  console.log('address saved in state', selectedAddress)
  const dispatch = useDispatch()
  const [addressOpen, setAddressOpen] = useState(false)
  const [addresses, setAddresses] = useState<AddressData[]>([])

  const { handleSubmit, register, reset } = useForm<AddressData>()

  const submitHandler = (data: AddressData) => {
    console.log(data)
    setAddresses([...addresses, data])
    reset()
    setAddressOpen(false)
  }
  const postAddress = async () => {
    const token = Cookies.get('accessToken')
    const res = await fetch('http://localhost:3000/api/v1/client/address', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        latitude: '23.586464',
        longitude: '56.900213',
        address: 'dasjdhjkasdh',
      }),
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
  }
  return (
    <>
      <div className="divide space-y-3 divide-y divide-zinc-300 rounded-md border border-zinc-400 p-4">
        <button onClick={() => postAddress()}>test address</button>
        <div className="mb-4 flex justify-between pb-2">
          <button
            className="text-green-900"
            onClick={() => setAddressOpen(!addressOpen)}
          >
            افزودن ادرس
          </button>
          <p>ادرس ها</p>
        </div>
        {addresses?.length > 0 ? (
          addresses?.map((address) => (
            <label
              onClick={() => dispatch(getAddress(address))}
              htmlFor={address.address}
              key={address.title}
              className="flex justify-between gap-3 bg-amber-100"
            >
              <input
                type="radio"
                name="ali"
                className="bg-red-200"
                id={address.address}
              />
              <div className="flex w-full justify-between p-3">
                <div>
                  <button>✏</button>
                  <button>💥</button>
                </div>
                <h2>{address.address}</h2>
              </div>
            </label>
          ))
        ) : (
          <div className="flex items-center justify-center">
            ادرسی وجود ندارد
          </div>
        )}
      </div>
      <span
        className={
          addressOpen
            ? `fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-black/65`
            : 'hidden'
        }
      >
        <div className="flex h-[70%] max-h-[500px] w-[90%] flex-col overflow-hidden rounded-lg bg-white sm:max-w-[500px]">
          <h1 className="relative bg-zinc-200 py-4 text-center font-semibold">
            ثبت آدرس{' '}
            <button
              className="absolute right-4"
              onClick={() => setAddressOpen(!addressOpen)}
            >
              X
            </button>
          </h1>
          <form
            onSubmit={handleSubmit((data) => submitHandler(data))}
            className="flex h-full w-full flex-col gap-3 p-2 text-right"
          >
            <input
              {...register('title')}
              className="w-full rounded-md border border-zinc-300 p-1 text-right placeholder:text-right"
              type="text"
              placeholder="عنوان آدرس"
            />
            <div className="space-x-3">
              <label htmlFor="receiveBySelf">تحویل گیرنده خودم هستم</label>
              <input
                {...register('receiveBySelf')}
                type="checkbox"
                name="receiveBySelf"
                id="receiveBySelf"
              />
            </div>
            <input
              {...register('phone')}
              className="w-full rounded-md border border-zinc-300 p-1 text-right placeholder:text-right"
              type="text"
              placeholder="شماره همراه"
            />
            <input
              {...register('address')}
              className="h-full w-full rounded-md border border-zinc-300 p-1 text-right placeholder:text-right"
              type="text"
              placeholder="ادرس دقیق شما"
            />

            <button className="mt-auto mb-2 bg-green-800 p-2 text-white hover:bg-green-900/85">
              ثبت
            </button>
          </form>
        </div>
      </span>
    </>
  )
}

export default BasketAddresses
