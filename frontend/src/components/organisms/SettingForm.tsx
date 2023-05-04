import { useState } from 'react'
import { useRouter } from 'next/router'
import { settingList } from '@/config'

// functions
import createSetting from '@/functions/fetch/settings/post'
import updateSetting from '@/functions/fetch/updateSetting'
import convertNumberValue from '@/functions/convertNumberValue'

// components
import SelectTire from '@/components/molecules/SelectTire'

// types
import type { TireManufacturerType, TireType, SettingType } from '@/types/data'
import type { GetMycarType } from '@/functions/fetch/mycar/getMycars'

export type SettingValueType = Omit<
  SettingType,
  'tireId' | 'mycarId' | '_id' | 'active'
> & {
  tireId: string
  mycarId: string
  [key: string]: number | string | undefined | null
}

type PropTypes = {
  mycars?: GetMycarType[]
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialSettingValue?: Partial<SettingValueType>
  type: 'create' | 'put'
  //以下の値はputの場合のみ
  setParentSettingValue?: (
    value: Omit<SettingType, 'tireId' | 'mycarId' | '_id' | 'active'> & {
      tireId: string
      mycarId: string
      [key: string]: number | string | undefined | null
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
  const [settingValue, setSettingValue] = useState<SettingValueType>({
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
        : null,
    airPressureFrontRight:
      initialSettingValue && initialSettingValue.airPressureFrontRight
        ? initialSettingValue.airPressureFrontRight
        : null,
    airPressureRearLeft:
      initialSettingValue && initialSettingValue.airPressureRearLeft
        ? initialSettingValue.airPressureRearLeft
        : null,
    airPressureRearRight:
      initialSettingValue && initialSettingValue.airPressureRearRight
        ? initialSettingValue.airPressureRearRight
        : null,
    springRateFront:
      initialSettingValue && initialSettingValue.springRateFront
        ? initialSettingValue.springRateFront
        : null,
    springRateRear:
      initialSettingValue && initialSettingValue.springRateRear
        ? initialSettingValue.springRateRear
        : null,
    rideHeightFront:
      initialSettingValue && initialSettingValue.rideHeightFront
        ? initialSettingValue.rideHeightFront
        : null,
    rideHeightRear:
      initialSettingValue && initialSettingValue.rideHeightRear
        ? initialSettingValue.rideHeightRear
        : null,
    damperAdjustmentFront:
      initialSettingValue && initialSettingValue.damperAdjustmentFront
        ? initialSettingValue.damperAdjustmentFront
        : null,
    damperAdjustmentRear:
      initialSettingValue && initialSettingValue.damperAdjustmentRear
        ? initialSettingValue.damperAdjustmentRear
        : null,
    camberAngleFront:
      initialSettingValue && initialSettingValue.camberAngleFront
        ? initialSettingValue.camberAngleFront
        : null,
    camberAngleRear:
      initialSettingValue && initialSettingValue.camberAngleRear
        ? initialSettingValue.camberAngleRear
        : null,
    toeAngleFront:
      initialSettingValue && initialSettingValue.toeAngleFront
        ? initialSettingValue.toeAngleFront
        : null,
    toeAngleRear:
      initialSettingValue && initialSettingValue.toeAngleRear
        ? initialSettingValue.toeAngleRear
        : null,
    rearSpoiler:
      initialSettingValue && initialSettingValue.rearSpoiler
        ? initialSettingValue.rearSpoiler
        : '',
    boostPressure:
      initialSettingValue && initialSettingValue.boostPressure
        ? initialSettingValue.boostPressure
        : null,
    freeText:
      initialSettingValue && initialSettingValue.freeText
        ? initialSettingValue.freeText
        : ''
  })

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(settingValue)

    console.log(typeof settingValue.rideHeightFront)
    console.log(typeof settingValue.camberAngleFront)

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
            setParentSettingValue(result.data)
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
    const convertedValue = convertNumberValue(value)
    setSettingValue((prevState) => ({ ...prevState, [name]: convertedValue }))
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
                  manufacturerId:
                    initialSettingValue.tireManufacturerId.toString()
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
                {field.type === 'textArea' ? (
                  <textarea
                    name={`${field.name}${subField}`}
                    value={settingValue[`${field.name}${subField}`] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <>
                    <input
                      name={`${field.name}${subField}`}
                      type={field.type === 'number' ? 'number' : 'text'}
                      step={field.type === 'number' ? '0.1' : ''}
                      inputMode={
                        field.type === 'number'
                          ? 'decimal'
                          : field.type === 'numeric'
                          ? 'numeric'
                          : 'text'
                      }
                      value={settingValue[`${field.name}${subField}`] || ''}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                    />
                    {field.unit && <span>{field.unit}</span>}
                  </>
                )}
              </label>
            ))
          ) : (
            <>
              {field.type === 'textArea' ? (
                <textarea
                  name={field.name}
                  value={settingValue[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
              ) : (
                <>
                  <input
                    name={field.name}
                    type={field.type === 'number' ? 'number' : 'text'}
                    step={field.type === 'number' ? '0.1' : ''}
                    inputMode={
                      field.type === 'number'
                        ? 'decimal'
                        : field.type === 'numeric'
                        ? 'numeric'
                        : 'text'
                    }
                    value={settingValue[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                  />
                  {field.unit && <span>{field.unit}</span>}
                </>
              )}
            </>
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
