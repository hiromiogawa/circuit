import axios from 'axios'

import type { SettingType } from '@/types/data'

const updateSetting = async (
  _id: SettingType['_id'],
  data: Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
    tireId: string
    mycarId: string
  }
) => {
  try {
    const res = await axios.put('/api/settings', {
      _id,
      ...data
    })

    return res
  } catch (error) {
    console.error(error)
    return null
  }
}

export default updateSetting
