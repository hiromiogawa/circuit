import axios from 'axios'

import type { DrivetrainType } from '@/types/data'

// getStaticProps内のみで使用可能
const getDrivetrains = async () => {
  try {
    const backendRes = await axios.get<DrivetrainType[]>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/drivetrains`
    )
    const drivetrains = backendRes.data
    return drivetrains
  } catch (error: any) {
    console.error(
      '駆動方式の取得に失敗しました:',
      error.message,
      error.response
    )
  }
}

export default getDrivetrains
