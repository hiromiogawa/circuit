import { useState, useEffect } from 'react'
import type { TireManufacturerType, TireType } from '@/types/data'

type SelectTireType = {
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  selectTire: string
  initialValue:
    | {
        manufacturerId: string
        tireId: string
      }
    | false
  setSelectedTire: (value: string) => void
}

const SelectTire = ({
  tires,
  tireManufacturers,
  initialValue,
  selectTire,
  setSelectedTire
}: SelectTireType) => {
  const [selectManufacturerId, setSelectManufacturerId] = useState<string>(
    initialValue && initialValue.manufacturerId
      ? initialValue.manufacturerId
      : ''
  )
  const [selectTires, setSelectTires] = useState<TireType[]>([])

  useEffect(() => {
    const sortTires = tires
      ? tires.filter((tire) => tire.manufacturer._id === selectManufacturerId)
      : []
    setSelectTires(sortTires)
  }, [selectManufacturerId])

  return (
    <>
      {tireManufacturers && (
        <select
          onChange={(e) => setSelectManufacturerId(e.target.value)}
          value={selectManufacturerId}
        >
          <option value="">タイヤメーカーを選択してください</option>
          {tireManufacturers.map((manufacturer) => (
            <option key={manufacturer._id} value={manufacturer._id}>
              {manufacturer.name}
            </option>
          ))}
        </select>
      )}

      {selectTires.length > 0 && (
        <select
          onChange={(e) => setSelectedTire(e.target.value)}
          value={selectTire}
        >
          <option value="">タイヤを選択してください</option>
          {selectTires.map((tire) => (
            <option key={tire._id} value={tire._id}>
              {tire.name}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default SelectTire
