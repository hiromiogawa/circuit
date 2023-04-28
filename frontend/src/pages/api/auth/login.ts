import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Forward the request to the backend
    const backendRes = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/auth/login`,
      req.body,
      {
        headers: {
          cookie: req.headers.cookie || ''
        },
        withCredentials: true
      }
    )

    // バックエンドから受け取ったセッション Cookie を設定する
    const setCookie = backendRes.headers['set-cookie']
    if (setCookie) {
      res.setHeader('Set-Cookie', setCookie)
    }

    // バックエンドからの応答を転送する
    res.status(backendRes.status).json(backendRes.data)
  } catch (error: any) {
    res.status(error.response.status).json(error.response.data)
  }
}

export default login
