import axios from 'axios'

import type { ManufacturerType } from '@/types/data'

// getStaticProps内のみで使用可能
const getManufacturers = async () => {
  try {
    const backendRes = await axios.get<ManufacturerType[]>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/manufacturers`
    )
    const manufacturers = backendRes.data
    return manufacturers
  } catch (error: any) {
    console.error(
      '自動車メーカー情報の取得に失敗しました:',
      error.message,
      error.response
    )
  }
}

export default getManufacturers
