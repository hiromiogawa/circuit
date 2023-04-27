import axios from 'axios'

const createMyCar = async (carId: string) => {
  try {
    await axios.post('/api/mycar/create', { carId: carId })
    return true
  } catch (error) {
    console.error('Failed to create my car:', error)
  }
}

export default createMyCar
