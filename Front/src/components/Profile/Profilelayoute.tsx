import { useNumber } from '../../Context/NumberUserForProfile'
import HeaderListProfile from './HeaderListProfile'
import useGetUser from '../../hooks/useGetUser'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'


const editProfile = async (token:string,id: number,inputsValues:any) => {

  const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/client/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      firstname: inputsValues.name,
      lastname: inputsValues.family,
      ShowName: inputsValues.userName,
      email: inputsValues.email,
      birthDay: inputsValues.birthDay
    })
  })

  return response.json()
}

function ProfileLayout () {
  const { mobile } = useNumber()
  const useToken = Cookies.get('accessToken') || ''

  const user =  useGetUser(useToken)
  
  const [inputsValues,setInputsValues] = useState({
    name: "",
    family: "",
    userName: "",
    phoneNumber: mobile,
    email: "",
    birthDay: ""
  })

  const [isEmpty,setIsEmpty] = useState({
    name: false,
    family: false,
    userName: false,
    email: false,
    birthDay: false
  })

  const editProfileRequest = useMutation<void, Error, [string, number, object]>({
    mutationFn: ([token,id,inputsValues]) => editProfile(token,id,inputsValues)
  })

  const inputValueChange = (e:any) => {
    setInputsValues({...inputsValues, [e.target.getAttribute('id')]: e.target.value})
  } 

  useEffect(() => {
    if(user.isSuccess && user.data) {
      setInputsValues({
        name: user.data.firstname,
        family: user.data.lastname,
        userName: user.data.ShowName,
        phoneNumber: mobile,
        email: user.data.email,
        birthDay: user.data.birthDay
      })
    }
  },[user.isSuccess,user.data])

  return (
    <div>
      <HeaderListProfile tilte="پروفایل من" />
      <div className="flex h-full items-center justify-center px-2 py-6 sm:px-4 sm:py-10">
        <form className="flex w-full max-w-md flex-col items-center space-y-4 rounded-lg p-3 transition-all duration-500 hover:scale-105 sm:max-w-4xl sm:space-y-6 sm:p-4 md:p-8">
          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="family"
                    className={`peer w-full rounded-md border ${isEmpty.family ? 'border-red-500' : 'border-gray-300'} p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm`}
                    placeholder=" "
                    value={inputsValues.family}
                    onChange={(event) => inputValueChange(event)}
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#BFD8BD] peer-[&:not(:placeholder-shown)]:hidden sm:left-3 sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm"
                  >
                    نام خانوادگی
                  </label>
                </div>
                {isEmpty.family && <span className="text-[10px] text-red-500 mt-1">این فیلد نمی‌تواند خالی باشد</span>}
              </div>

              <div className="relative flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="userName"
                    className={`peer w-full rounded-md border ${isEmpty.userName ? 'border-red-500' : 'border-gray-300'} p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm`}
                    placeholder=" "
                    value={inputsValues.userName}
                    onChange={(event) => inputValueChange(event)}
                  />
                  <label
                    htmlFor="showName"
                    className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#BFD8BD] peer-[&:not(:placeholder-shown)]:hidden sm:left-3 sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm"
                  >
                    نام نمایشی
                  </label>
                </div>
                {isEmpty.userName && <span className="text-[10px] text-red-500 mt-1">این فیلد نمی‌تواند خالی باشد</span>}
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="job"
                  className="peer w-full rounded-md border border-gray-300 p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="job"
                  className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#BFD8BD] sm:left-3 sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm"
                >
                  وظیفه
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="peer w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-200 p-2 text-xs sm:text-sm"
                  value={mobile}
                  disabled={true}
                  placeholder=" "
                  onChange={(event) => inputValueChange(event)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className={`peer w-full rounded-md border ${isEmpty.name ? 'border-red-500' : 'border-gray-300'} p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm`}
                    placeholder=" "
                    value={inputsValues.name}
                    onChange={(event) => inputValueChange(event)}
                  />
                  <label
                    htmlFor="displayName"
                    className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#BFD8BD] peer-[&:not(:placeholder-shown)]:hidden sm:left-3 sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm"
                  >
                    نام
                  </label>
                </div>
                {isEmpty.name && <span className="text-[10px] text-red-500 mt-1">این فیلد نمی‌تواند خالی باشد</span>}
              </div>

              <div className="relative flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className={`peer w-full rounded-md border ${isEmpty.email ? 'border-red-500' : 'border-gray-300'} p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm`}
                    placeholder=" "
                    value={inputsValues.email}
                    onChange={(event) => inputValueChange(event)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#BFD8BD] peer-[&:not(:placeholder-shown)]:hidden sm:left-3 sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm"
                  >
                    آدرس ایمیل
                  </label>
                </div>
                {isEmpty.email && <span className="text-[10px] text-red-500 mt-1">این فیلد نمی‌تواند خالی باشد</span>}
              </div>

              <div className="relative flex flex-col">
                <div className="relative">
                  <input
                    type="date"
                    id="birthDay"
                    className={`peer w-full rounded-md border ${isEmpty.birthDay ? 'border-red-500' : 'border-gray-300'} p-2 text-xs focus:ring-2 focus:ring-[#2E5940] focus:outline-none sm:text-sm`}
                    placeholder=" "
                    value={inputsValues.birthDay}
                    onChange={(event) => inputValueChange(event)}
                  />
                </div>
                {isEmpty.birthDay && <span className="text-[10px] text-red-500 mt-1">این فیلد نمی‌تواند خالی باشد</span>}
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center gap-2 sm:gap-4">
            <button
              type="button"
              className="xs:w-[90px] w-full cursor-pointer rounded-md border-1 border-[#2E5940] p-2 text-xs text-[#2E5940] transition-all duration-300 hover:bg-gray-50 sm:w-[131px] sm:text-sm"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="xs:w-[90px] w-full cursor-pointer rounded-md bg-[#2E5940] p-2 text-xs text-white transition-all duration-300 hover:bg-[#1F402D] sm:w-[131px] sm:text-sm"
              onClick={(e) => {
                e.preventDefault()
                setIsEmpty({
                  name: !inputsValues.name,
                  family: !inputsValues.family,
                  userName: !inputsValues.userName,
                  email: !inputsValues.email,
                  birthDay: !inputsValues.birthDay
                })
                if(inputsValues.name && inputsValues.family && inputsValues.userName && inputsValues.email && inputsValues.birthDay) {
                  editProfileRequest.mutate([useToken,user.data.id,inputsValues])
                  console.log(editProfileRequest.data,editProfileRequest.error,editProfileRequest.isError)
                  console.log(user.id,typeof user.id)
                }

                setTimeout(() => {
                  setIsEmpty({
                    name: false,
                    family: false,
                    userName: false,
                    email: false,
                    birthDay: false
                  })
                },3000)
              }}
            >
              ذخیره اطلاعات
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileLayout
