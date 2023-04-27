import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

// types
import type { UserType } from '@/types/users'

export type CheckAuthType = {
  isAuthenticated: boolean
  user?: Pick<UserType, '_id' | 'username'>
}

export const checkAuth = async (
  context: GetServerSidePropsContext
): Promise<CheckAuthType> => {
  try {
    const res = await axios.get('http://localhost:3000/auth/check-auth', {
      headers: {
        cookie: context.req.headers.cookie || ''
      },
      withCredentials: true
    })

    if (res.data.isAuthenticated) {
      return {
        isAuthenticated: true,
        user: res.data.user
      }
    } else {
      return {
        isAuthenticated: false
      }
    }
  } catch (error) {
    return {
      isAuthenticated: false
    }
  }
}
