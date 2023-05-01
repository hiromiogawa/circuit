import axios from 'axios'
import type { SettingType } from '@/types/data'

export type GetSettingType = {
  _id: SettingType['_id']
  mycar: SettingType['mycarId']
  tire: SettingType['tireId']
  freeText: SettingType['freeText']
}

const getSetting = async (id: string): Promise<GetSettingType | false> => {
  try {
    const res: {
      data: SettingType
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/${id}`
    )

    return {
      _id: res.data._id,
      mycar: res.data.mycarId,
      tire: res.data.tireId,
      freeText: res.data.freeText
    }
  } catch (error) {
    return false
  }
}

export default getSetting
