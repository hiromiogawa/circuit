import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginRequestBody = {
  email: string
  password: string
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body as LoginRequestBody
      const response = await axios.post(
        `${process.env.SERVICE_DOMAIN}/auth/login`,
        {
          email,
          password
        }
      )

      res.status(200).json(response.data)
    } catch (error: any) {
      res.status(error.response.status).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default login
