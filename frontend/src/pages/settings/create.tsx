import { useState, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'
import getTires from '@/functions/fetch/tires/getTires'
import createSetting from '@/functions/fetch/settings/createSetting'

import SelectTire from '@/components/molecules/SelectTire'

import type { TireManufacturerType, TireType, SettingType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  mycars: GetMycarType[] | false
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialMycar: string
}

const CreateSetting = ({
  isAuthenticated,
  mycars,
  tireManufacturers,
  tires,
  initialMycar
}: PropTypes) => {
  const [settingValue, setSettingValue] = useState<
    Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
      tireId: string
      mycarId: string
      [key: string]: string
    }
  >({
    mycarId: initialMycar,
    tireId: '',
    tireSizeFront: '',
    tireSizeRear: '',
    airPressureFront: '',
    airPressureRear: '',
    springRateFront: '',
    springRateRear: '',
    rideHeightFront: '',
    rideHeightRear: '',
    damperAdjustmentFront: '',
    damperAdjustmentRear: '',
    camberAngleFront: '',
    camberAngleRear: '',
    toeAngleFront: '',
    toeAngleRear: '',
    rearSpoiler: '',
    boostPressure: '',
    freeText: ''
  })

  const router = useRouter()

  const formFields: {
    label: string
    name: string
    subFields: string[]
  }[] = [
    {
      label: 'タイヤサイズ',
      name: 'tireSize',
      subFields: ['Front', 'Rear']
    },
    {
      label: 'タイヤ空気圧',
      name: 'airPressure',
      subFields: ['Front', 'Rear']
    },
    {
      label: 'バネレート',
      name: 'springRate',
      subFields: ['Front', 'Rear']
    },
    {
      label: '車高',
      name: 'rideHeight',
      subFields: ['Front', 'Rear']
    },
    {
      label: '減衰力',
      name: 'damperAdjustment',
      subFields: ['Front', 'Rear']
    },
    {
      label: 'キャンバー角',
      name: 'camberAngle',
      subFields: ['Front', 'Rear']
    },
    {
      label: 'トー角',
      name: 'toeAngle',
      subFields: ['Front', 'Rear']
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(settingValue)

    const result = await createSetting(settingValue)
    if (!result) {
      console.error('Failed to create setting')
    } else {
      console.log('Setting created successfully')
      router.push(`/settings/${result.data._id}`)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setSettingValue((prevState) => ({ ...prevState, [name]: value }))
  }

  useEffect(() => {
    if (!isAuthenticated) router.push('/login')
    if (!mycars) router.push('/mycar/create')
  }, [])

  useEffect(() => {
    console.log(settingValue)
  }, [settingValue])

  if (!isAuthenticated || !mycars) {
    return null
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <select
          name="mycarId"
          value={settingValue.mycarId}
          onChange={handleChange}
        >
          <option value="">マイカーを選択してください</option>
          {mycars.map((mycar) => (
            <option key={mycar._id} value={mycar._id}>
              {mycar.car.name} {mycar.car.modelName}
            </option>
          ))}
        </select>

        <div>
          <p>タイヤ</p>
          <SelectTire
            tires={tires}
            tireManufacturers={tireManufacturers}
            setSelectedTire={(tireId) =>
              setSettingValue((prevState) => ({
                ...prevState,
                tireId: tireId
              }))
            }
          />
        </div>

        {formFields.map((field) => (
          <div key={field.name}>
            <p>{field.label}</p>
            {field.subFields.map((subField) => (
              <label key={`${field.name}${subField}`}>
                {subField}
                <input
                  name={`${field.name}${subField}`}
                  type="text"
                  value={settingValue[`${field.name}${subField}`]}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
        ))}

        <div>
          <p>リアスポイラ</p>
          <input
            name="rearSpoiler"
            type="text"
            value={settingValue.rearSpoiler}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>ブースト圧</p>
          <input
            name="boostPressure"
            type="text"
            value={settingValue.boostPressure}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="freeText"
          onChange={handleChange}
          value={settingValue.freeText}
          placeholder="フリーテキスト (オプション)"
        ></textarea>

        <button
          type="submit"
          disabled={!settingValue.mycarId || !settingValue.tireId}
        >
          設定を追加
        </button>
      </form>
    </Layout>
  )
}

export default CreateSetting

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [authResult, myCarsData, tireManufacturersData, tiresData] =
    await Promise.all([
      checkAuth(context),
      getMycars(context),
      getTireManufacturers(),
      getTires()
    ])

  const initialMycar = context.query.mycar || ''

  return {
    props: {
      mycars: myCarsData,
      tireManufacturers: tireManufacturersData,
      initialMycar,
      tires: tiresData,
      ...authResult
    }
  }
}
