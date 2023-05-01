import { useState, ChangeEvent, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getCars from '@/functions/fetch/cars/getCars'
import getManufacturers from '@/functions/fetch/manufacturers/getManufacturers'
import createMycar from '@/functions/fetch/mycar/createMycar'

import type { CarType, ManufacturerType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  cars: CarType[] | false
  manufacturers: ManufacturerType[]
}

const CreateMyCar = ({ isAuthenticated, cars, manufacturers }: PropTypes) => {
  const [selectManufacturer, setSelectManufacturer] = useState<CarType[] | []>(
    []
  )
  const [selectedCar, setSelectedCar] = useState<string>('')

  const router = useRouter()

  const handleManufacturerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortCars = cars
      ? cars.filter((car) => car.manufacturer.name === e.target.value)
      : []
    setSelectManufacturer(sortCars)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createMycar(selectedCar)
    console.log(result)
    if (!result) {
      console.error('Failed to create my car')
    } else {
      console.log('My car created successfully')
      router.push(`/mycar/${result.data._id}`)
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
        <form onSubmit={handleSubmit}>
          {manufacturers && (
            <select onChange={handleManufacturerChange}>
              <option value="">選択してください</option>
              {manufacturers.map((manufacuturer) => (
                <option key={`${manufacuturer.name}`}>
                  {manufacuturer.name}
                </option>
              ))}
            </select>
          )}

          {selectManufacturer.length > 0 && (
            <select onChange={(e) => setSelectedCar(e.target.value)}>
              <option>選択してください</option>
              {selectManufacturer.map((car) => (
                <option
                  key={`${car.name}-${car.modelName}`}
                  value={`${car._id}`}
                >
                  {car.name} {car.modelName}
                </option>
              ))}
            </select>
          )}
          <button type="submit" disabled={!selectedCar}>
            登録する
          </button>
        </form>
      </Layout>
    )
  }
}

export default CreateMyCar

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
