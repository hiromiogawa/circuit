import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const mycarEndPoint = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const carId: string = req.body.carId

      try {
        const backendRes = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar/`,
          { carId },
          {
            withCredentials: true,
            headers: {
              Cookie: req.headers.cookie || ''
            }
          }
        )
        const createdMyCar = backendRes.data
        res.status(201).json(createdMyCar)
      } catch (error: any) {
        console.error('Error in API endpoint:', error.message)
        res.status(500).json({ message: error.message })
      }
      break

    case 'DELETE':
      const { id } = req.query

      if (typeof id !== 'string') {
        res.status(400).json({ message: 'Invalid request' })
        return
      }

      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar/${id}`,
          {
            withCredentials: true,
            headers: {
              Cookie: req.headers.cookie || ''
            }
          }
        )

        res.status(204).end()
      } catch (error) {
        res.status(500).json({ message: 'Error deleting MyCar entry' })
      }
      break

    default:
      res.status(405).json({ message: 'Method not allowed' })
      break
  }
}

export default mycarEndPoint
