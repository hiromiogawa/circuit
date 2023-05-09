import axios, { AxiosError } from 'axios'
import handleAxiosError from '../handleAxiosError'

const deleteCar = async (id: string) => {
  try {
    await axios.delete(`/api/cars/`, { params: { id } })
    return true
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleAxiosError(error)
    } else {
      console.error('/api/carsの接続に失敗しました:', error)
    }
    return null
  }
}

export default deleteCar
