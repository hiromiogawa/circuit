import { AxiosError } from 'axios'

const handleAxiosError = (error: AxiosError): null => {
  if (error.response && error.response.data && error.response.data.message) {
    // サーバーからのレスポンスがある場合
    console.error(
      `Error: ${error.response.status} - ${error.response.data.message}`
    )
  } else if (error.request) {
    // リクエストが行われたが、レスポンスがない場合
    console.error(`Error: No response received. ${error.message}`)
  } else {
    // 何らかの理由でリクエストが作成されなかった場合
    console.error(`Error: Request not created. ${error.message}`)
  }
  return null
}

export default handleAxiosError
