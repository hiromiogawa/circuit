import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'
import handleAxiosError from '@/functions/fetch/handleAxiosError'

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
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          handleAxiosError(error)
          res.status(500).json({ message: error.message })
        } else {
          res.status(500).json({ message: 'Unknown error occurred' })
        }
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
          `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/cars/${id}`,
          {
            withCredentials: true,
            headers: {
              Cookie: req.headers.cookie || ''
            }
          }
        )
        res.status(204).end()
      } catch (error: unknown) {
        if (error instanceof AxiosError) handleAxiosError(error)
        res.status(500).json({ message: 'Error deleting setting entry' })
      }
      break

    default:
      res.status(405).json({ message: 'Method not allowed' })
      break
  }
}

export default carEndPoint
