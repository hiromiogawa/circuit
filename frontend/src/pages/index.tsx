import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/checkAuth'

import logout from '@/functions/logout'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

import CircleButton from '@/components/atoms/button/CircleButton'

type PropTypes = CheckAuthType

const Home = ({ isAuthenticated, user }: PropTypes) => {
  const router = useRouter()

  const handleLogout = async () => {
    const isLogout = await logout()
    if (isLogout) router.push('/login')
  }

  if (isAuthenticated && user) {
    return (
      <Layout>
        <p>{user.username}</p>

        <CircleButton handleClcik={handleLogout} type="red">
          SignOut
        </CircleButton>
      </Layout>
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
