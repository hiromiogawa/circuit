import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const carEndPoint = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const carData = req.body

      try {
        const backendRes = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/cars`,
          { ...carData },
          {
            withCredentials: true,
            headers: {
              Cookie: req.headers.cookie || ''
            }
          }
        )
        res.status(201).json(backendRes.data)
      } catch (error: any) {
        console.error('Error in API endpoint:', error.message)
        res.status(500).json({ message: error.message })
      }
      break
  }
}

export default carEndPoint
