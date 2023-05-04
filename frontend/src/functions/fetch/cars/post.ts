import axios from 'axios'

import type { CarType } from '@/types/data'

type CreateCarType = {
  manufacturer: string
  drivetrains: string
} & Omit<CarType, '_id' | 'drivetrains' | 'manufacturer'>

const createCar = async (carData: CreateCarType) => {
  try {
    const response = await axios.post('/api/cars', carData)
    return response.data
  } catch (error) {
    console.error('Failed to create car', error)
    return null
  }
}

export default createCar
