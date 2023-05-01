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
  const [selectManufacturer, setSelectManufacturer] = useState<
    TireManufacturerType[] | []
  >([])

  const handleTireManufacturerChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const sortCars = tires
      ? tires.filter((tire) => tire.manufacturer._id === event.target.value)
      : []
    setSelectManufacturer(sortCars)
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

      {selectManufacturer.length > 0 && (
        <select onChange={(e) => setSelectedTire(e.target.value)}>
          <option value="">タイヤを選択してください</option>
          {selectManufacturer.map((tire) => (
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
