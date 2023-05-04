import axios from 'axios'

import type { CarType } from '@/types/data'

// getStaticProps内のみで使用可能
const getCars = async () => {
  try {
    const backendRes = await axios.get<CarType[]>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/cars`
    )
    const cars = backendRes.data
    return cars
  } catch (error: any) {
    console.error(
      '車一覧情報の取得に失敗しました:',
      error.message,
      error.response
    )
  }
}

export default getCars
