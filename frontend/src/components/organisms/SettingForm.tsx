import { useState } from 'react'
import { useRouter } from 'next/router'
import { settingList } from '@/config'

// functions
import createSetting from '@/functions/fetch/settings/post'
import updateSetting from '@/functions/fetch/updateSetting'

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
  //以下の値はputの場合のみ
  setParentSettingValue?: (
    value: Omit<SettingType, 'tireId' | 'mycarId' | '_id'> & {
      tireId: string
      mycarId: string
      [key: string]: string
    }
  ) => void
  setIsEdit?: (value: boolean) => void
  settingId?: string
}

const SettingForm = ({
  mycars,
  tireManufacturers,
  tires,
  initialSettingValue,
  type,
  setParentSettingValue = () => {},
  setIsEdit = () => {},
  settingId = ''
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
    airPressureFrontLeft:
      initialSettingValue && initialSettingValue.airPressureFrontLeft
        ? initialSettingValue.airPressureFrontLeft
        : '',
    airPressureFrontRight:
      initialSettingValue && initialSettingValue.airPressureFrontRight
        ? initialSettingValue.airPressureFrontRight
        : '',
    airPressureRearLeft:
      initialSettingValue && initialSettingValue.airPressureRearLeft
        ? initialSettingValue.airPressureRearLeft
        : '',
    airPressureRearRight:
      initialSettingValue && initialSettingValue.airPressureRearRight
        ? initialSettingValue.airPressureRearRight
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    switch (type) {
      case 'create':
        try {
          const result = await createSetting(settingValue)
          if (result) {
            console.log(`Setting ${type} successfully`)
            router.push(`/settings/${result.data._id}`)
          }
        } catch (error: any) {
          console.error(`Failed to ${type} setting`)
        }
        break
      case 'put':
        try {
          const result = await updateSetting(settingId, settingValue)
          if (result) {
            console.log(`Setting ${type} successfully`)
            setParentSettingValue(settingValue)
            setIsEdit(false)
          }
        } catch (error: any) {
          console.error(`Failed to ${type} setting`)
        }
        break
      default:
        break
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

      {settingList.map((field) => (
        <div key={field.name}>
          <p>{field.label}</p>
          {field.subFields ? (
            field.subFields.map((subField) => (
              <label key={`${field.name}${subField}`}>
                {subField}
                <input
                  name={`${field.name}${subField}`}
                  type="text"
                  value={settingValue[`${field.name}${subField}`]}
                  onChange={handleChange}
                />
              </label>
            ))
          ) : (
            <input
              name={field.name}
              type="text"
              value={settingValue[field.name]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

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
