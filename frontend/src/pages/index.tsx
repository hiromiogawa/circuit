import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

// myFunctions
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getUser, { GetUserType } from '@/functions/fetch/users/getUser'
import logout from '@/functions/fetch/auth/logout'

// components
import Link from 'next/link'
import Layout from '@/components/common/Layout'
import ImageUpload from '@/components/molecules/ImageUpload'
import CircleButton from '@/components/atoms/button/CircleButton'
import Image from 'next/image'

type PropTypes = {
  mycar: GetMycarType[]
  user: GetUserType
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
        <ImageUpload
          initialImage={
            user.img
              ? `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${user.img}`
              : ''
          }
          endPoint={`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/users/imagePath`}
          isMyData={isAuthenticated}
        />

        <p>{user.name}</p>

        <CircleButton handleClcik={handleLogout} type="red">
          SignOut
        </CircleButton>

        {mycar.length > 0 ? (
          <ul>
            {mycar.map((value) => (
              <li key={value._id}>
                <Link href={`/mycar/${value._id}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${value.img}`}
                    alt={value.car.name}
                    width={700}
                    height={350}
                  />
                  {value.car.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Link href="/mycar/create">マイカーを登録する</Link>
        )}
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Link href="/login">
          <CircleButton>login</CircleButton>
        </Link>
        <Link href="/signup">
          <CircleButton>signup</CircleButton>
        </Link>
        <p>Please log in.</p>
      </Layout>
    )
  }
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const authResult = await checkAuth(context)

  if (!authResult.isAuthenticated) {
    return {
      props: {
        mycar: [],
        isAuthenticated: false,
        user: null
      }
    }
  }

  const [user, mycarData] = await Promise.all([
    getUser(context),
    getMycars(context)
  ])

  return {
    props: {
      mycar: mycarData,
      isAuthenticated: authResult.isAuthenticated,
      user
    }
  }
}
