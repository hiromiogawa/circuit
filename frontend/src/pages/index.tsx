import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/checkAuth'
import getMyCar, { GetMyCarType } from '@/functions/getMycar'
import getUpload from '@/functions/getUpload'

import logout from '@/functions/logout'
import Link from 'next/link'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

import Image from 'next/image'

import CircleButton from '@/components/atoms/button/CircleButton'

type PropTypes = {
  mycar: GetMyCarType[]
  user: {
    username: string
    imagePath: string
  }
} & Pick<CheckAuthType, 'isAuthenticated'>

const Home = ({ user, mycar, isAuthenticated }: PropTypes) => {
  const router = useRouter()

  const handleLogout = async () => {
    const isLogout = await logout()
    if (isLogout) router.push('/login')
  }

  if (isAuthenticated && user) {
    return (
      <Layout>
        <Image
          src={user.imagePath}
          alt={user.username}
          width={100}
          height={100}
        />
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
  let imagePath
  if (authResult.isAuthenticated) {
    mycarData = await getMyCar(context)
    imagePath = `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${
      authResult.user!.imagePath
    }`
  }
  return {
    props: {
      mycar: authResult.isAuthenticated ? mycarData : [],
      isAuthenticated: authResult.isAuthenticated,
      user: {
        imagePath: imagePath,
        username: authResult.user!.username
      }
    }
  }
}
