import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

// myFunctions
import checkAuth, { CheckAuthType } from '@/functions/fetch/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/getMycars'
import getUser, { GetUserType } from '@/functions/fetch/getUser'
import logout from '@/functions/fetch/logout'

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
    return <p>Please log in.</p>
  }
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const authResult = await checkAuth(context)

  let mycarData
  let user
  if (authResult.isAuthenticated) {
    user = await getUser(context)
    mycarData = await getMycars(context)
  }

  return {
    props: {
      mycar: authResult.isAuthenticated && mycarData ? mycarData : [],
      isAuthenticated: authResult.isAuthenticated,
      user: user ? user : null
    }
  }
}
