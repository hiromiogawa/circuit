import axios from 'axios'
import { SettingType } from '@/types/data'

const updateSetting = async (
  _id: string,
  data: Omit<SettingType, 'tireId' | 'mycarId' | '_id' | 'active'> & {
    tireId: string
    mycarId: string
  }
): Promise<
  | {
      data: Omit<SettingType, 'tireId' | 'mycarId' | 'active'> & {
        tireId: string
        mycarId: string
      }
    }
  | false
> => {
  try {
    const response = await axios.put(`/api/settings`, { _id, data })
    return response
  } catch (error) {
    console.error('Failed to update setting', error)
    return false
  }
}

export default updateSetting
