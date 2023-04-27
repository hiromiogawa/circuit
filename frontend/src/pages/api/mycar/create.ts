import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const createMyCar = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const carId: string = req.body.carId

    try {
      const backendRes = await axios.post(
        `${process.env.SERVICE_DOMAIN}/mycar`,
        { carId },
        {
          withCredentials: true, // クッキーを転送するために追加
          headers: {
            Cookie: req.headers.cookie || '' // クッキーをリクエストヘッダーに追加
          }
        }
      )
      const createdMyCar = backendRes.data
      res.status(201).json(createdMyCar)
    } catch (error: any) {
      console.error('Error in API endpoint:', error.message)
      res.status(500).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default createMyCar
