import axios, { AxiosError } from 'axios'
import type { SettingType } from '@/types/data'

const getSetting = async (id: string): Promise<SettingType | null> => {
  try {
    const res: {
      data: SettingType
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/${id}`
    )

    return res.data
  } catch (error: unknown) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      console.error(
        `Error: ${error.response.status} - ${error.response.data.message}`
      )
    }
    return null
  }
}

export default getSetting
