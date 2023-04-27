import { useState, ChangeEvent } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/checkAuth'
import getCars from '@/functions/getCars'
import getManufacturers from '@/functions/getManufacturers'

import type { CarType, ManufacturerType } from '@/types/cars'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  cars: CarType[] | false
  manufacuturers: ManufacturerType[]
}

const SelectCar = ({
  isAuthenticated,
  user,
  cars,
  manufacuturers
}: PropTypes) => {
  const [selectValue, setSelectValue] = useState<CarType[] | []>([])

  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)

    const sortCars = cars
      ? cars.filter((car) => car.manufacturer.name === event.target.value)
      : []
    setSelectValue(sortCars)
  }

  if (isAuthenticated && user) {
    return (
      <Layout>
        {user.username}

        {manufacuturers && (
          <select onChange={handleChange}>
            <option value="">選択してください</option>
            {manufacuturers.map((manufacuturer) => (
              <option key={`${manufacuturer.name}`}>
                {manufacuturer.name}
              </option>
            ))}
          </select>
        )}

        {selectValue && (
          <select>
            <option value="">選択してください</option>
            {selectValue.map((car) => (
              <option key={`${car.name}-${car.modelName}`}>
                {car.name} {car.modelName}
              </option>
            ))}
          </select>
        )}
      </Layout>
    )
  }

  if (!isAuthenticated) {
    router.push('/login')
    return null
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
      manufacuturers: manufacturersData,
      cars: carsData,
      ...authResult
    }
  }
}
