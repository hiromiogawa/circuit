import axios from 'axios'
import { MyCarType } from '@/types/data'

const createMyCar = async (carId: string) => {
  try {
    const newMyCar: Promise<{
      data: MyCarType
    }> = axios.post('/api/mycar/create', { carId: carId })
    return newMyCar
  } catch (error) {
    console.error('Failed to create my car:', error)
    return false
  }
}

export default createMyCar
