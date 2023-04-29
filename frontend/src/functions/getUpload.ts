import axios from 'axios'

const getUpload = async (path: string): Promise<string | null> => {
  try {
    const backendRes = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${path}`
    )

    return backendRes.data
  } catch (error: any) {
    console.error(
      'ファイルの取得に失敗しました:',
      error.message,
      error.response
    )
    return null
  }
}

export default getUpload
