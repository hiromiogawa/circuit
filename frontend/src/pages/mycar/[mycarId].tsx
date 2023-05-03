import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// myFunctions
import getMycar, { GetMycarType } from '@/functions/fetch/mycar/getMycar'
import checkAuth from '@/functions/fetch/auth/checkAuth'
import deleteMyCar from '@/functions/fetch/mycar/deleteMycar'
import getActiveSettingsByMyCarId, {
  GetActiveSettingsByMyCarIdType
} from '@/functions/fetch/settings/getActiveByMyCarIdType'

// components
import Link from 'next/link'
import ImageUpload from '@/components/molecules/ImageUpload'

type PropTypes = {
  mycar: GetMycarType
  isMycar: boolean
  setting: GetActiveSettingsByMyCarIdType
}

const MyCar = ({ mycar, isMycar, setting }: PropTypes) => {
  const router = useRouter()

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

  return (
    <>
      <ImageUpload
        initialImage={
          mycar.img
            ? `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload/${mycar.img}`
            : ''
        }
        endPoint={`${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/mycar/${mycar._id}/imagePath`}
        isMyData={isMycar}
      />

      <p>{mycar.car.name}</p>
      <p>{mycar.car.modelName}</p>
      <p>{mycar.user.username}</p>
      <p>{mycar.car.drivetrains.system}</p>
      <p>{mycar.car.manufacturer.name}</p>
      {isMycar && <button onClick={handleDelete}>マイカーから削除する</button>}

      {setting.length > 0 &&
        setting.map((value) => (
          <div key={value._id}>
            <p>{value.freeText}</p>
            <p>{value.tire.manufacturer.name}</p>
            <p>{value.tire.name}</p>
            {isMycar && (
              <Link href={`/settings/${value._id}`}>セッティングページ</Link>
            )}
          </div>
        ))}
      {isMycar && (
        <Link href={`/settings/create?mycar=${mycar._id}`}>
          セッティングを登録する
        </Link>
      )}
    </>
  )
}

export default MyCar

export const getServerSideProps: GetServerSideProps = async (context) => {
  // URL パスから mycarId を取得
  const mycarId = context.params!.mycarId as string

  const myCarData = await getMycar(mycarId)

  // ユーザーの車かどうか判別するための変数を宣言
  let isMycar = false
  let settingData
  // データが存在しない場合、404 ページを表示
  if (!myCarData) {
    return {
      notFound: true
    }
  } else {
    const authResult = await checkAuth(context)

    // ログインしている場合、そのユーザーの車かどうか判別
    if (
      authResult.isAuthenticated &&
      myCarData.user._id === authResult.userId
    ) {
      isMycar = true
      settingData = await getActiveSettingsByMyCarId(myCarData._id)
    }
  }

  // データを props として渡す
  return {
    props: {
      mycar: myCarData,
      isMycar: isMycar,
      setting: settingData ? settingData : []
    }
  }
}
