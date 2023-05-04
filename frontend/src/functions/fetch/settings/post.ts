import axios from 'axios'

import type { SettingType } from '@/types/data'

const createSetting = async (
  data: Omit<SettingType, 'tireId' | 'mycarId' | '_id' | 'active'> & {
    tireId: string
    mycarId: string
  }
) => {
  try {
    const res = await axios.post('/api/settings', {
      ...data
    })

    return res
  } catch (error) {
    console.error(`${error}api`)
    return null
  }
}

export default createSetting
