import { useQuery } from 'react-query'

export default function useGetUser(Token)  {

  const fetchUserData = async () => {
    const data = await fetch('http://localhost:3000/api/v1/client/users/getMe',{
      headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${Token}`,
      },
      method: 'GET'
    })

    return data.json()
  }


  const userData = useQuery({
    queryKey: ['userData'],
    queryFn: () => fetchUserData()
  })

  return userData
}
