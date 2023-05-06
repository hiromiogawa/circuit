import { useState, ChangeEvent, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getCars from '@/functions/fetch/cars/getCars'
import getManufacturers from '@/functions/fetch/manufacturers/getManufacturers'
import createMycar from '@/functions/fetch/mycar/createMycar'

import SelectCar from '@/components/molecules/SelectCar'

import type { CarType, ManufacturerType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  cars: CarType[]
  manufacturers: ManufacturerType[]
}

const CreateMyCar = ({ isAuthenticated, cars, manufacturers }: PropTypes) => {
  const [selectedCar, setSelectedCar] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createMycar(selectedCar)
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
          <SelectCar
            cars={cars}
            manufacturers={manufacturers}
            setSelectedCar={setSelectedCar}
          />
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
  const [authResult, manufacturersData, carsData] = await Promise.all([
    checkAuth(context),
    getManufacturers(),
    getCars()
  ])

  // データが存在しない場合、404 ページを表示
  if (!manufacturersData || !carsData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      manufacturers: manufacturersData,
      cars: carsData,
      ...authResult
    }
  }
}
