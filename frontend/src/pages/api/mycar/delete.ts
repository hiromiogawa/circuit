import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const deleteMyCar = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
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
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default deleteMyCar
