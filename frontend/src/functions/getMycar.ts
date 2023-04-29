import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

import type { CarType } from '@/types/cars'
import type { UserType } from '@/types/users'

export type GetMyCarType = {
  _id: string
  user: UserType
  car: CarType
}

const getMyCar = async (
  context: GetServerSidePropsContext
): Promise<GetMyCarType[]> => {
  try {
    const res: {
      data: {
        _id: GetMyCarType['_id']
        userId: GetMyCarType['user']
        carId: GetMyCarType['car']
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
      car: value.carId
    }))
  } catch (error) {
    return []
  }
}

export default getMyCar
