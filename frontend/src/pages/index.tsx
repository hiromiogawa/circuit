import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/checkAuth'
import getMyCar, { GetMyCarType } from '@/functions/getMycar'

import logout from '@/functions/logout'
import Link from 'next/link'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

import CircleButton from '@/components/atoms/button/CircleButton'

import FileUpload from '@/components/common/FileUpLoad'

type PropTypes = CheckAuthType & { mycar: GetMyCarType[] }

const Home = ({ isAuthenticated, user, mycar }: PropTypes) => {
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

        {mycar.length > 0 ? (
          <ul>
            {mycar.map((value) => (
              <li key={value._id}>
                <Link href={`/mycar/${value.car._id}`}>{value.car.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <Link href="/mycar/select">マイカーを登録する</Link>
        )}
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

  let mycarData
  if (authResult.isAuthenticated) {
    mycarData = await getMyCar(context)
  }
  return {
    props: {
      mycar: authResult.isAuthenticated ? mycarData : [],
      ...authResult
    }
  }
}
