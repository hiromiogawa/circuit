import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

import type { UserType, CarType, MyCarType } from '@/types/data'

export type GetMyCarType = {
  _id: MyCarType['_id']
  user: Pick<UserType, '_id' | 'username'>
  car: CarType
  img: MyCarType['imagePath']
}

const getMyCars = async (
  context: GetServerSidePropsContext
): Promise<GetMyCarType[]> => {
  try {
    const res: {
      data: {
        _id: GetMyCarType['_id']
        userId: GetMyCarType['user']
        carId: GetMyCarType['car']
        imagePath: GetMyCarType['img']
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

export default getMyCars
