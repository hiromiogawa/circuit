import axios from 'axios'

import type { CarType } from '@/types/data'

// getStaticProps内のみで使用可能
const getCar = async (id: string) => {
  try {
    const backendRes = await axios.get<CarType>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/cars/${id}`
    )
    const cars = backendRes.data
    return cars
  } catch (error: any) {
    console.error('車情報の取得に失敗しました:', error.message, error.response)
  }
}

export default getCar
