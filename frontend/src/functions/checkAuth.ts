import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

// types
import type { UserType } from '@/types/users'

// getStaticProps内のみで使用可能
export type CheckAuthType = {
  isAuthenticated: boolean
  user?: Pick<UserType, '_id' | 'username' | 'imagePath'>
}

const checkAuth = async (
  context: GetServerSidePropsContext
): Promise<CheckAuthType> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/auth/check-auth`,
      {
        headers: {
          cookie: context.req.headers.cookie || ''
        },
        withCredentials: true
      }
    )

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

export default checkAuth
