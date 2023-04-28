import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password, username } = req.body
      await axios.post(`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/users/`, {
        email,
        password,
        username
      })

      res.status(201).json({ message: 'User created successfully' })
    } catch (error: any) {
      const { response } = error
      if (response) {
        res.status(response.status).json(response.data)
      } else {
        res.status(500).json({ message: 'An error occurred while signing up.' })
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default signup
