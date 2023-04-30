import { GetServerSideProps } from 'next'

const Setting = ({}) => {}

export default Setting

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
