import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { checkAuth, CheckAuthType } from '@/functions/checkAuth'

import axios from 'axios'
import { useRouter } from 'next/router'

type PropTypes = CheckAuthType

const Home = ({ isAuthenticated, user }: PropTypes) => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout')
      router.push('/login')
    } catch (error) {
      console.error('ログアウトに失敗しました:', error)
    }
  }

  if (isAuthenticated && user) {
    return (
      <>
        <p>Welcome, {user.username}!</p>
        <button onClick={handleLogout} className="...">
          ログアウト
        </button>
      </>
    )
  } else {
    return <p>Please log in.</p>
  }
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const authResult = await checkAuth(context)
  return {
    props: authResult
  }
}
