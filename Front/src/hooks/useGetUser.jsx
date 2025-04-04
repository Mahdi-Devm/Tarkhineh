import { useQuery } from 'react-query'
import { BASEURL } from '../api'

export default function useGetUser(Token)  {

  const fetchUserData = async () => {
    const data = await fetch(`${BASEURL}/client/users/getMe`,{
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
