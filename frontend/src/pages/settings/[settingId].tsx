import { useState } from 'react'
import { GetServerSideProps } from 'next'

// functions
import getSetting, {
  GetSettingType
} from '@/functions/fetch/settings/getSetting'
import checkAuth from '@/functions/fetch/auth/checkAuth'

type PropTypes = {
  setting: GetSettingType
  isMycar: boolean
}

const Setting = ({ setting, isMycar }: PropTypes) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [settingValue, setSettingValue] = useState<GetSettingType>(setting)
  return (
    <>
      <div>
        <p>{settingValue.mycar.userId.username}</p>
        <p>{settingValue.mycar.carId.name}</p>
        <p>{settingValue.tire.manufacturer.name}</p>
        <p>{settingValue.tire.name}</p>
        <p>{settingValue.freeText}</p>
      </div>
    </>
  )
}

export default Setting

export const getServerSideProps: GetServerSideProps = async (context) => {
  // URL パスから mycarId を取得
  const settingId = context.params!.settingId as string

  const settingData = await getSetting(settingId)

  // ユーザーの車かどうか判別するための変数を宣言
  let isMySetting = false
  // データが存在しない場合、404 ページを表示
  if (!settingData) {
    return {
      notFound: true
    }
  } else {
    const authResult = await checkAuth(context)

    // ログインしている場合、そのユーザーの車かどうか判別
    if (
      authResult.isAuthenticated &&
      settingData.mycar.userId._id === authResult.userId
    ) {
      isMySetting = true
    }
  }

  // データを props として渡す
  return {
    props: {
      setting: settingData,
      isMySetting
    }
  }
}
