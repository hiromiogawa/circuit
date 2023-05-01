import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const settingEndPoint = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const mycarId = req.body.mycarId
        const createSettingDto = {
          tireId: req.body.tireId,
          freeText: req.body.freeText
        }

        const backendRes = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/mycar/${mycarId}`,
          createSettingDto,
          {
            headers: {
              cookie: req.headers.cookie || ''
            },
            withCredentials: true
          }
        )

        res.status(201).json(backendRes.data)
      } catch (error: any) {
        res.status(error.response.status).json(error.response.data)
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
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/${id}`,
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

    default:
      res.status(405).json({ message: 'Method not allowed' })
      break
  }
}

export default settingEndPoint
