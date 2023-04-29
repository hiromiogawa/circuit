import { useState, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/checkAuth'
import getMyCars, { GetMyCarType } from '@/functions/fetch/getMycars'
import getUser, { GetUserType } from '@/functions/fetch/getUser'
import upload from '@/functions/fetch/upload'
import logout from '@/functions/fetch/logout'
import Link from 'next/link'
import axios from 'axios'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

import Image from 'next/image'

import CircleButton from '@/components/atoms/button/CircleButton'

import noImage from '@/images/mycar.png'

type PropTypes = {
  mycar: GetMyCarType[]
  user: GetUserType
} & Pick<CheckAuthType, 'isAuthenticated'>

const Home = ({ user, mycar, isAuthenticated }: PropTypes) => {
  const [imagePreview, setImagePreview] = useState<string>('')
  const [imagePath, setImagePath] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleLogout = async () => {
    const isLogout = await logout()
    if (isLogout) router.push('/login')
  }

  const updateUserImage = async (id: string): Promise<void> => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/users/imagePath`,
        {
          imagePath
        },
        { withCredentials: true }
      )

      if (response.status !== 204) {
        throw new Error('Failed to update user image path.')
      }
    } catch (error: any) {
      throw new Error(error.message || 'Error updating user image path.')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setImage(file)

      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target) {
          setImagePreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (image) {
      const _filePath = await upload(image)
      setImagePath(_filePath)
    } else {
      setError('ファイルを登録してください')
    }
  }

  useEffect(() => {
    if (imagePath && user) updateUserImage(user._id)
  }, [imagePath])

  if (isAuthenticated && user) {
    return (
      <Layout>
        <Image
          src={
            imagePreview
              ? imagePreview
              : user.img
              ? `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${user.img}`
              : noImage
          }
          alt={user.img ? user.name : 'No Image'}
          width={700}
          height={340}
        />
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />{' '}
          <button disabled={!image} type="submit">
            {user.img ? '決定' : '登録'}
          </button>
        </form>
        {error && <p>{error}</p>}

        <p>{user.name}</p>

        <CircleButton handleClcik={handleLogout} type="red">
          SignOut
        </CircleButton>

        {mycar.length > 0 ? (
          <ul>
            {mycar.map((value) => (
              <li key={value._id}>
                <Link href={`/mycar/${value._id}`}>{value.car.name}</Link>
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
  let user
  if (authResult.isAuthenticated) {
    user = await getUser(context)
    mycarData = await getMyCars(context)
  }

  return {
    props: {
      mycar: authResult.isAuthenticated && mycarData ? mycarData : [],
      isAuthenticated: authResult.isAuthenticated,
      user: user ? user : null
    }
  }
}
