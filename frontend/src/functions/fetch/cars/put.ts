import axios, { AxiosError } from 'axios'
import handleAxiosError from '../handleAxiosError'

import type { CarType } from '@/types/data'

const updateCar = async (
  data: Omit<CarType, 'manufacturer' | 'drivetrains'> & {
    manufacturer: string
    drivetrains: string
  }
) => {
  try {
    const res = await axios.put('/api/cars/', {
      ...data
    })

    return res
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleAxiosError(error)
    } else {
      console.error('/api/carsの接続に失敗しました:', error)
    }
    return null
  }
}

export default updateCar
