import { ChangeEvent } from 'react'
import type { DrivetrainType } from '@/types/data'

export type SelectDriveTrains = {
  driveTrains: DrivetrainType[]
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const SelectDriveTrains = ({
  driveTrains,
  value,
  handleChange
}: SelectDriveTrains) => {
  return (
    <select name="drivetrains" value={value} onChange={handleChange}>
      <option value="">選択してください</option>
      {driveTrains.map((driveTrain) => (
        <option key={driveTrain._id} value={driveTrain._id}>
          {driveTrain.system}
        </option>
      ))}
    </select>
  )
}

export default SelectDriveTrains
