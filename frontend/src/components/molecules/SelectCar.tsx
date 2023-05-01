import { useState, ChangeEvent } from 'react'

import type { CarType, ManufacturerType } from '@/types/data'

type SelectCarType = {
  manufacturers: ManufacturerType[]
  cars: CarType[]
  setSelectedCar: (value: string) => void
}

const SelectCar = ({ cars, manufacturers, setSelectedCar }: SelectCarType) => {
  const [seletcCars, setSelecCars] = useState<CarType[]>([])

  const handleManufacturerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(cars)
    const sortCars = cars
      ? cars.filter((car) => car.manufacturer._id === e.target.value)
      : []
    setSelecCars(sortCars)
  }

  return (
    <>
      {manufacturers && (
        <select onChange={handleManufacturerChange}>
          <option value="">選択してください</option>
          {manufacturers.map((manufacuturer) => (
            <option key={manufacuturer._id} value={manufacuturer._id}>
              {manufacuturer.name}
            </option>
          ))}
        </select>
      )}

      {seletcCars.length > 0 && (
        <select onChange={(e) => setSelectedCar(e.target.value)}>
          <option>選択してください</option>
          {seletcCars.map((car) => (
            <option key={`${car.name}-${car.modelName}`} value={`${car._id}`}>
              {car.name} {car.modelName}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default SelectCar
