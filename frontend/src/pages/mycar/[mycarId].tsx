import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import getUser from '@/functions/fetch/getUser'
import getMyCar, { GetMyCarType } from '@/functions/fetch/getMycar'
import checkAuth from '@/functions/fetch/checkAuth'
import deleteMyCar from '@/functions/fetch/deleteMycar'
import upload from '@/functions/fetch/upload'
import axios from 'axios'

import Image from 'next/image'

import noImage from '@/images/mycar.png'

type PropTypes = {
  mycar: GetMyCarType
  isMycar: boolean
  accessToken: string
}

const MyCar = ({ mycar, isMycar }: PropTypes) => {
  const [imagePreview, setImagePreview] = useState<string>('')
  const [imagePath, setImagePath] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const updateMycarImage = async (id: string): Promise<void> => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar/${id}/imagePath`,
        {
          imagePath
        },
        { withCredentials: true }
      )

      if (response.status !== 204) {
        throw new Error('Failed to update my car image path.')
      }
    } catch (error: any) {
      throw new Error(error.message || 'Error updating my car image path.')
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

  const handleDelete = async () => {
    if (window.confirm('マイカーから削除しますか？')) {
      try {
        await deleteMyCar(mycar._id)
        router.push('/')
      } catch (error: any) {
        window.alert(`削除に失敗しました: ${error.message}`)
      }
    }
  }

  useEffect(() => {
    if (imagePath) updateMycarImage(mycar._id)
  }, [imagePath])

  return (
    <>
      <Image
        src={
          imagePreview
            ? imagePreview
            : mycar.img
            ? `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${mycar.img}`
            : noImage
        }
        alt={mycar.img ? mycar.car.name : 'No Image'}
        width={700}
        height={340}
      />
      {error && <p>{error}</p>}
      {isMycar && (
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />{' '}
          <button disabled={!image} type="submit">
            {mycar.img ? '決定' : '登録'}
          </button>
        </form>
      )}
      <p>{mycar.car.name}</p>
      <p>{mycar.car.modelName}</p>
      <p>{mycar.user.username}</p>
      <p>{mycar.car.drivetrains.system}</p>
      <p>{mycar.car.manufacturer.name}</p>
      {isMycar && <button onClick={handleDelete}>マイカーから削除する</button>}
    </>
  )
}

export default MyCar

export const getServerSideProps: GetServerSideProps = async (context) => {
  // URL パスから mycarId を取得
  const mycarId = context.params!.mycarId as string

  const myCarData = await getMyCar(mycarId)

  // ユーザーの車かどうか判別するための変数を宣言
  let isMycar = false

  // データが存在しない場合、404 ページを表示
  if (!myCarData) {
    return {
      notFound: true
    }
  } else {
    const authResult = await checkAuth(context)

    // ログインしている場合、そのユーザーの車かどうか判別
    if (authResult.isAuthenticated && myCarData.user._id === authResult.userId)
      isMycar = true
  }

  // データを props として渡す
  return {
    props: {
      isAuthenticated: myCarData,
      isMycar: isMycar
    }
  }
}
