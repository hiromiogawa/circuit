import axios, { AxiosError } from 'axios'
import handleAxiosError from '../handleAxiosError'

import type { DrivetrainType } from '@/types/data'

// getStaticProps内のみで使用可能
const getDrivetrains = async () => {
  try {
    const backendRes = await axios.get<DrivetrainType[]>(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/drivetrains`
    )
    const drivetrains = backendRes.data
    return drivetrains
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleAxiosError(error)
    } else {
      console.error('drivetrainsの接続に失敗しました:', error)
    }
    return null
  }
}

export default getDrivetrains
