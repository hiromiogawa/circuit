import { useState } from 'react'
import { useRouter } from 'next/router'

// functions
import createSetting from '@/functions/fetch/settings/post'

// components
import SelectTire from '@/components/molecules/SelectTire'

// types
import type { TireManufacturerType, TireType, SettingType } from '@/types/data'
import type { GetMycarType } from '@/functions/fetch/mycar/getMycars'

type PropTypes = {
  mycars?: GetMycarType[]
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialSettingValue?: Partial<
    Omit<SettingType, 'tireId' | 'mycarId' | '_id'>
  > & {
    tireId?: string
    mycarId?: string
    tireManufacturerId: string
    [key: string]: string | undefined
  }
  type: 'create' | 'put'
  // putの場合のみ
  setSettingValue?: (
    value: Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
      tireId: string
      mycarId: string
      [key: string]: string
    }
  ) => void
  setIsEdit?: (value: boolean) => void
}

const SettingForm = ({
  mycars,
  tireManufacturers,
  tires,
  initialSettingValue,
  type
}: PropTypes) => {
  const [settingValue, setSettingValue] = useState<
    Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
      tireId: string
      mycarId: string
      [key: string]: string
    }
  >({
    mycarId:
      initialSettingValue && initialSettingValue.mycarId
        ? initialSettingValue.mycarId
        : '',
    tireId:
      initialSettingValue && initialSettingValue.tireId
        ? initialSettingValue.tireId
        : '',
    tireSizeFront:
      initialSettingValue && initialSettingValue.tireSizeFront
        ? initialSettingValue.tireSizeFront
        : '',
    tireSizeRear:
      initialSettingValue && initialSettingValue.tireSizeRear
        ? initialSettingValue.tireSizeRear
        : '',
    airPressureFront:
      initialSettingValue && initialSettingValue.airPressureFront
        ? initialSettingValue.airPressureFront
        : '',
    airPressureRear:
      initialSettingValue && initialSettingValue.airPressureRear
        ? initialSettingValue.airPressureRear
        : '',
    springRateFront:
      initialSettingValue && initialSettingValue.springRateFront
        ? initialSettingValue.springRateFront
        : '',
    springRateRear:
      initialSettingValue && initialSettingValue.springRateRear
        ? initialSettingValue.springRateRear
        : '',
    rideHeightFront:
      initialSettingValue && initialSettingValue.rideHeightFront
        ? initialSettingValue.rideHeightFront
        : '',
    rideHeightRear:
      initialSettingValue && initialSettingValue.rideHeightRear
        ? initialSettingValue.rideHeightRear
        : '',
    damperAdjustmentFront:
      initialSettingValue && initialSettingValue.damperAdjustmentFront
        ? initialSettingValue.damperAdjustmentFront
        : '',
    damperAdjustmentRear:
      initialSettingValue && initialSettingValue.damperAdjustmentRear
        ? initialSettingValue.damperAdjustmentRear
        : '',
    camberAngleFront:
      initialSettingValue && initialSettingValue.camberAngleFront
        ? initialSettingValue.camberAngleFront
        : '',
    camberAngleRear:
      initialSettingValue && initialSettingValue.camberAngleRear
        ? initialSettingValue.camberAngleRear
        : '',
    toeAngleFront:
      initialSettingValue && initialSettingValue.toeAngleFront
        ? initialSettingValue.toeAngleFront
        : '',
    toeAngleRear:
      initialSettingValue && initialSettingValue.toeAngleRear
        ? initialSettingValue.toeAngleRear
        : '',
    rearSpoiler:
      initialSettingValue && initialSettingValue.rearSpoiler
        ? initialSettingValue.rearSpoiler
        : '',
    boostPressure:
      initialSettingValue && initialSettingValue.boostPressure
        ? initialSettingValue.boostPressure
        : '',
    freeText:
      initialSettingValue && initialSettingValue.freeText
        ? initialSettingValue.freeText
        : ''
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
    let result

    switch (type) {
      case 'create':
        result = await createSetting(settingValue)
        //if (type === 'put') result = await putSetting(id, settingValue)
        break
    }

    if (!result) {
      console.error('Failed to create setting')
    } else {
      console.log(`Setting ${type} successfully`)
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

  console.log(settingValue.tireId)

  return (
    <form onSubmit={handleSubmit}>
      {type === 'create' && mycars && (
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
      )}

      <div>
        <p>タイヤ</p>
        <SelectTire
          tires={tires}
          tireManufacturers={tireManufacturers}
          selectTire={settingValue.tireId}
          setSelectedTire={(tireId) =>
            setSettingValue((prevState) => ({
              ...prevState,
              tireId: tireId
            }))
          }
          initialValue={
            initialSettingValue &&
            initialSettingValue.tireId &&
            initialSettingValue.tireManufacturerId
              ? {
                  tireId: initialSettingValue.tireId,
                  manufacturerId: initialSettingValue.tireManufacturerId
                }
              : false
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
        disabled={
          (type === 'create' && !settingValue.mycarId) || !settingValue.tireId
        }
      >
        設定を追加
      </button>
    </form>
  )
}

export default SettingForm
