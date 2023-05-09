import axios, { AxiosError } from 'axios'
import handleAxiosError from '../handleAxiosError'

import type { CarType } from '@/types/data'

// getStaticProps内のみで使用可能
const getCars = async () => {
  try {
    const backendRes = await axios.get<CarType[]>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/cars`
    )
    const cars = backendRes.data
    return cars
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleAxiosError(error)
    } else {
      console.error('/api/carsの接続に失敗しました:', error)
    }
    return null
  }
}

export default getCars
