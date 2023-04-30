import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const mycarId = req.body.mycarId
      const createSettingDto = {
        tireId: req.body.tireId,
        freeText: req.body.freeText
      }

      console.log(mycarId)

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/settings/mycar/${mycarId}`,
        createSettingDto,
        {
          headers: {
            cookie: req.headers.cookie || ''
          },
          withCredentials: true
        }
      )

      res.status(201).json(response.data)
    } catch (error: any) {
      res.status(error.response.status).json(error.response.data)
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
