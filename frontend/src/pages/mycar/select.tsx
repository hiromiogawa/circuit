import { useState, ChangeEvent, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/checkAuth'
import getCars from '@/functions/fetch/getCars'
import getManufacturers from '@/functions/fetch/getManufacturers'
import createMyCar from '@/functions/fetch/createMyCar'

import type { CarType, ManufacturerType } from '@/types/cars'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  cars: CarType[] | false
  manufacturers: ManufacturerType[]
}

const SelectCar = ({ isAuthenticated, cars, manufacturers }: PropTypes) => {
  const [selectValue, setSelectValue] = useState<CarType[] | []>([])
  const [selectedCar, setSelectedCar] = useState<string>('')

  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const sortCars = cars
      ? cars.filter((car) => car.manufacturer.name === event.target.value)
      : []
    setSelectValue(sortCars)
  }

  const handleCarChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(event.target.value)
  }

  const handleClick = async () => {
    const result = await createMyCar(selectedCar)
    console.log(result)
    if (!result) {
      console.error('Failed to create my car')
    } else {
      console.log('My car created successfully')
      router.push('/')
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null
  }

  if (isAuthenticated) {
    return (
      <Layout>
        {manufacturers && (
          <select onChange={handleChange}>
            <option value="">選択してください</option>
            {manufacturers.map((manufacuturer) => (
              <option key={`${manufacuturer.name}`}>
                {manufacuturer.name}
              </option>
            ))}
          </select>
        )}

        {selectValue.length > 0 && (
          <select onChange={handleCarChange}>
            <option>選択してください</option>
            {selectValue.map((car) => (
              <option key={`${car.name}-${car.modelName}`} value={`${car._id}`}>
                {car.name} {car.modelName}
              </option>
            ))}
          </select>
        )}
        <button disabled={!selectedCar} onClick={handleClick}>
          登録する
        </button>
      </Layout>
    )
  }
}

export default SelectCar

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const authResult = await checkAuth(context)
  const manufacturersData = await getManufacturers()
  const carsData = await getCars()

  return {
    props: {
      manufacturers: manufacturersData,
      cars: carsData,
      ...authResult
    }
  }
}
