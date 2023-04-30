import axios from 'axios'

import type { TireType } from '@/types/data'

const getTires = async (): Promise<TireType[]> => {
  try {
    const res: {
      data: TireType[]
    } = await axios.get(`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/tires`)

    return res.data
  } catch (error) {
    return []
  }
}

export default getTires
