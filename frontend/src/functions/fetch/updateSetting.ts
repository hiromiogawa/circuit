import axios from 'axios'
import { SettingType } from '@/types/data'

const updateSetting = async (id: string, updateSettingDto: SettingType) => {
  try {
    const response = await axios.put(`/api/settings/${id}`, updateSettingDto)
    return response.data
  } catch (error) {
    console.error('Failed to update setting', error)
    return false
  }
}

export default updateSetting
