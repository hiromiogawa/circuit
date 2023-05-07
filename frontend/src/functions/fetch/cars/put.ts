import axios from 'axios'

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
  } catch (error) {
    console.error(error)
    return null
  }
}

export default updateCar
