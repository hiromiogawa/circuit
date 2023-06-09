import axios from 'axios'
import type { SettingType } from '@/types/data'

export type GetSettingsByMyCarIdType = {
  _id: SettingType['_id']
  mycar: SettingType['mycarId']
  tire: SettingType['tireId']
  freeText: SettingType['freeText']
}[]

const getSettingsByMyCarId = async (
  mycarId: string
): Promise<GetSettingsByMyCarIdType | false> => {
  try {
    const res: {
      data: SettingType[]
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/mycar/${mycarId}`
    )

    return res.data.map((value) => ({
      _id: value._id,
      mycar: value.mycarId,
      tire: value.tireId,
      freeText: value.freeText
    }))
  } catch (error) {
    return []
  }
}

export default getSettingsByMyCarId
