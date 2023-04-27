import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await axios.post(
      `${process.env.SERVICE_DOMAIN}/auth/logout`,
      {},
      {
        headers: {
          cookie: req.headers.cookie || ''
        },
        withCredentials: true
      }
    )

    res.status(200).json({ success: true })
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export default logout
