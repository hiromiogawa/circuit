import axios from 'axios'
import type { SettingType } from '@/types/data'

const getSetting = async (id: string): Promise<SettingType | false> => {
  try {
    const res: {
      data: SettingType
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/${id}`
    )

    return res.data
  } catch (error) {
    return false
  }
}

export default getSetting
