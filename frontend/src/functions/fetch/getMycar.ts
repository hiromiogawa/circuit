import axios from 'axios'

import type { CarType } from '@/types/cars'
import type { UserType } from '@/types/users'

export type GetMyCarType = {
  _id: string
  img?: string
  user: UserType
  car: CarType
}

const getMyCar = async (id: string): Promise<GetMyCarType | false> => {
  try {
    const res: {
      data: {
        _id: GetMyCarType['_id']
        imagePath?: GetMyCarType['img']
        userId: GetMyCarType['user']
        carId: GetMyCarType['car']
      }
    } = await axios.get(`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar/${id}`)

    return {
      _id: res.data._id,
      img: res.data.imagePath ? res.data.imagePath : '',
      user: res.data.userId,
      car: res.data.carId
    }
  } catch (error) {
    return false
  }
}

export default getMyCar
