import axios from 'axios'

import type { UserType, CarType, MyCarType } from '@/types/data'

export type GetMycarType = {
  _id: string
  img?: string
  user: UserType
  car: CarType
}

const getMycar = async (id: string): Promise<GetMycarType | false> => {
  try {
    const res: {
      data: {
        _id: GetMycarType['_id']
        imagePath?: GetMycarType['img']
        userId: GetMycarType['user']
        carId: GetMycarType['car']
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

export default getMycar
