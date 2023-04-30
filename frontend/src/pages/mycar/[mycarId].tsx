import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// myFunctions
import getMyCar, { GetMyCarType } from '@/functions/fetch/getMycar'
import checkAuth from '@/functions/fetch/checkAuth'
import deleteMyCar from '@/functions/fetch/deleteMycar'
import getActiveSettingsByMyCarId, {
  GetActiveSettingsByMyCarIdType
} from '@/functions/fetch/getActiveSettingsByMyCarIdType'

// components
import ImageUpload from '@/components/molecules/ImageUpload'

type PropTypes = {
  mycar: GetMyCarType
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
      />

      <p>{mycar.car.name}</p>
      <p>{mycar.car.modelName}</p>
      <p>{mycar.user.username}</p>
      <p>{mycar.car.drivetrains.system}</p>
      <p>{mycar.car.manufacturer.name}</p>
      {isMycar && <button onClick={handleDelete}>マイカーから削除する</button>}

      {setting &&
        setting.length > 0 &&
        setting.map((value) => (
          <>
            <p>{value.freeText}</p>
            <p>{value.tire.manufacturer.name}</p>
            <p>{value.tire.name}</p>
          </>
        ))}
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
      console.log(settingData)
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
