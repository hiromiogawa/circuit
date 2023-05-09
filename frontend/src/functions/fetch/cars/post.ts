import axios, { AxiosError } from 'axios'
import handleAxiosError from '../handleAxiosError'

import type { CarType } from '@/types/data'

type CreateCarType = {
  manufacturer: string
  drivetrains: string
} & Omit<CarType, '_id' | 'drivetrains' | 'manufacturer'>

const createCar = async (carData: CreateCarType) => {
  try {
    const response = await axios.post('/api/cars', carData)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleAxiosError(error)
    } else {
      console.error('/api/carsの接続に失敗しました:', error)
    }
    return null
  }
}

export default createCar
