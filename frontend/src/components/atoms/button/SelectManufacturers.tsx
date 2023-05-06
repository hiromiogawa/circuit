import { ChangeEvent } from 'react'
import type { ManufacturerType } from '@/types/data'

export type SelectManufacturersType = {
  manufacturers: ManufacturerType[]
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const SelectManufacturers = ({
  manufacturers,
  value,
  handleChange
}: SelectManufacturersType) => {
  return (
    <select name="manufacturer" value={value} onChange={handleChange}>
      <option value="">選択してください</option>
      {manufacturers.map((manufacuturer) => (
        <option key={manufacuturer._id} value={manufacuturer._id}>
          {manufacuturer.name}
        </option>
      ))}
    </select>
  )
}

export default SelectManufacturers
