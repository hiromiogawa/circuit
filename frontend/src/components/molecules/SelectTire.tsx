import { useState, ChangeEvent } from 'react'
import type { TireManufacturerType, TireType } from '@/types/data'

type SelectTireType = {
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  setSelectedTire: (value: string) => void
}

const SelectTire = ({
  tires,
  tireManufacturers,
  setSelectedTire
}: SelectTireType) => {
  const [selectTires, setSelectTires] = useState<TireType[]>([])

  const handleTireManufacturerChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const sortTires = tires
      ? tires.filter((tire) => tire.manufacturer._id === event.target.value)
      : []
    setSelectTires(sortTires)
  }

  return (
    <>
      {tireManufacturers && (
        <select onChange={handleTireManufacturerChange}>
          <option value="">タイヤメーカーを選択してください</option>
          {tireManufacturers.map((manufacturer) => (
            <option key={manufacturer._id} value={manufacturer._id}>
              {manufacturer.name}
            </option>
          ))}
        </select>
      )}

      {selectTires.length > 0 && (
        <select onChange={(e) => setSelectedTire(e.target.value)}>
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
