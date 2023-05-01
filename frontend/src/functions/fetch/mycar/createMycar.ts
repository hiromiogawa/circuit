import axios from 'axios'

const createMycar = async (carId: string) => {
  try {
    const res = axios.post('/api/mycar', {
      carId
    })
    return res
  } catch (error) {
    console.error('Failed to create my car:', error)
    return false
  }
}

export default createMycar
