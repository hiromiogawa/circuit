import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

// functions
import getSetting from '@/functions/fetch/settings/get'
import checkAuth from '@/functions/fetch/auth/checkAuth'
import getTires from '@/functions/fetch/tires/getTires'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'

// components
import SettingForm from '@/components/organisms/settingForm'

//types
import type { TireType, TireManufacturerType, SettingType } from '@/types/data'

type PropTypes = {
  setting: SettingType
  isMySetting: boolean
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  settingId: string
}

const Setting = ({
  setting,
  isMySetting,
  tires,
  tireManufacturers,
  settingId
}: PropTypes) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [settingValue, setSettingValue] = useState<
    Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
      tireId?: string
      mycarId?: string
      [key: string]: string | undefined
    }
  >({
    mycarId: setting.mycarId._id,
    tireId: setting.tireId._id,
    freeText: setting.freeText,
    airPressureFront: setting.airPressureFront,
    airPressureRear: setting.airPressureRear,
    springRateFront: setting.springRateFront,
    springRateRear: setting.springRateRear,
    rideHeightFront: setting.rideHeightFront,
    rideHeightRear: setting.rideHeightRear,
    damperAdjustmentFront: setting.damperAdjustmentFront,
    damperAdjustmentRear: setting.damperAdjustmentRear,
    camberAngleFront: setting.camberAngleFront,
    camberAngleRear: setting.camberAngleRear,
    toeAngleFront: setting.toeAngleFront,
    toeAngleRear: setting.toeAngleRear,
    rearSpoiler: setting.rearSpoiler,
    boostPressure: setting.boostPressure,
    tireSizeFront: setting.tireSizeFront,
    tireSizeRear: setting.tireSizeRear
  })
  const [tire, setTire] = useState(
    tires.find((tire) => tire._id === settingValue.tireId)
  )

  useEffect(() => {
    if (tires && settingValue.tireId !== tire?._id)
      setTire(tires.find((tire) => tire._id === settingValue.tireId))
  }, [settingValue])

  return (
    <>
      {!isEdit ? (
        <>
          <p>{setting.mycarId.userId.username}</p>
          <p>{setting.mycarId.carId.name}</p>
          {/* <p>{tire?.manufacturer}</p> */}
          <p>{tire?.name}</p>
          <p>{setting.freeText}</p>
          {isMySetting && (
            <button onClick={() => setIsEdit(true)}>修正する</button>
          )}
        </>
      ) : (
        isMySetting &&
        tires &&
        tireManufacturers && (
          <SettingForm
            initialSettingValue={{
              tireManufacturerId: tire!.manufacturer._id,
              ...settingValue
            }}
            tireManufacturers={tireManufacturers}
            tires={tires}
            type="put"
            setParentSettingValue={setSettingValue}
            setIsEdit={setIsEdit}
            settingId={settingId}
          />
        )
      )}
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

  let tiresData
  let tireManufacturersData

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
      settingData.mycarId.userId._id === authResult.userId
    ) {
      isMySetting = true

      // Promise.all() を使用して、並行して非同期処理を実行
      const [tiresRes, tireManufacturersRes] = await Promise.all([
        getTires(),
        getTireManufacturers()
      ])

      tiresData = tiresRes
      tireManufacturersData = tireManufacturersRes
    }
  }

  // データを props として渡す
  return {
    props: {
      setting: settingData,
      tires: tiresData ? tiresData : false,
      tireManufacturers: tireManufacturersData ? tireManufacturersData : false,
      isMySetting,
      settingId
    }
  }
}
