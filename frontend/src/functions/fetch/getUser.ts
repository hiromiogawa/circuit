import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

import type { UserType } from '@/types/data'

export type GetUserType = {
  _id: UserType['_id']
  img?: UserType['imagePath']
  name: UserType['username']
}

const getUser = async (
  context: GetServerSidePropsContext
): Promise<GetUserType | false> => {
  try {
    const res: {
      data: UserType
    } = await axios.get(`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/users`, {
      headers: {
        cookie: context.req.headers.cookie || ''
      },
      withCredentials: true
    })

    return {
      _id: res.data._id,
      img: res.data.imagePath ? res.data.imagePath : '',
      name: res.data.username
    }
  } catch (error) {
    return false
  }
}

export default getUser
