import axios from 'axios'

import type { TireManufacturerType } from '@/types/data'

const getTireManufacturers = async (): Promise<TireManufacturerType[]> => {
  try {
    const res: {
      data: TireManufacturerType[]
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/tire_manufacturers`
    )

    return res.data.map((value) => ({
      _id: value._id,
      name: value.name
    }))
  } catch (error) {
    return []
  }
}

export default getTireManufacturers
