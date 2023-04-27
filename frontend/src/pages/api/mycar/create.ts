import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

type CreateMyCarDto = {
  carId: string
  userId: string
}

const createMyCar = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const createMyCarDto: CreateMyCarDto = req.body

    try {
      const backendRes = await axios.post(
        `${process.env.SERVICE_DOMAIN}/mycar/`,
        createMyCarDto
      )
      const createdMyCar = backendRes.data
      res.status(201).json(createdMyCar)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default createMyCar
