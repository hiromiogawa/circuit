import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

import type { UserType, CarType, MyCarType } from '@/types/data'

export type GetMycarType = {
  _id: MyCarType['_id']
  user: Pick<UserType, '_id' | 'username'>
  car: CarType
  img: MyCarType['imagePath']
}

const getMycars = async (
  context: GetServerSidePropsContext
): Promise<GetMycarType[]> => {
  try {
    const res: {
      data: {
        _id: GetMycarType['_id']
        userId: GetMycarType['user']
        carId: GetMycarType['car']
        imagePath: GetMycarType['img']
      }[]
    } = await axios.get(`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar`, {
      headers: {
        cookie: context.req.headers.cookie || ''
      },
      withCredentials: true
    })

    return res.data.map((value) => ({
      _id: value._id,
      user: value.userId,
      car: value.carId,
      img: value.imagePath
    }))
  } catch (error) {
    return []
  }
}

export default getMycars
