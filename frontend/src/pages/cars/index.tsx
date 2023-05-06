import { useState, FormEvent, ChangeEvent } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

// myFunctions
import checkAuth from '@/functions/fetch/auth/checkAuth'
import getCars from '@/functions/fetch/cars/getCars'
import getManufacturers from '@/functions/fetch/manufacturers/getManufacturers'
import getDrivetrains from '@/functions/fetch/driveTrains/get'
import createCar from '@/functions/fetch/cars/post'
import convertNumberValue from '@/functions/convertNumberValue'

// components
import Link from 'next/link'
import SelectManufacturers from '@/components/atoms/button/SelectManufacturers'
import SelectDriveTrains from '@/components/atoms/button/SelectDriveTrains'

// types
import type { CarType, ManufacturerType, DrivetrainType } from '@/types/data'

type PropTypes = {
  cars: CarType[]
  manufacturers: ManufacturerType[]
  drivetrains: DrivetrainType[]
}

const Cars = ({ cars, manufacturers, drivetrains }: PropTypes) => {
  const [carList, setCarList] = useState<CarType[]>(cars)
  const [formData, setFormData] = useState<
    {
      manufacturer: string
      drivetrains: string
    } & Omit<CarType, '_id' | 'drivetrains' | 'manufacturer'>
  >({
    manufacturer: '',
    name: '',
    modelName: '',
    displacement: 2000,
    drivetrains: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const convertedValue = convertNumberValue(value)
    setFormData((prevState) => ({ ...prevState, [name]: convertedValue }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await createCar(formData)
      if (result) {
        setCarList((prevState) => [...prevState, result])
      }
    } catch (error: any) {
      console.error(`Failed to post cars`)
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>メーカー</th>
              <th>車種</th>
              <th>型式</th>
              <th>排気量</th>
              <th>駆動方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SelectManufacturers
                  value={formData.manufacturer}
                  handleChange={handleChange}
                  manufacturers={manufacturers}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="modelName"
                  value={formData.modelName}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  inputMode="numeric"
                  name="displacement"
                  value={formData.displacement}
                  onChange={handleChange}
                />
              </td>
              <td>
                <SelectDriveTrains
                  driveTrains={drivetrains}
                  value={formData.drivetrains}
                  handleChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <button>追加する</button>
        </p>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>メーカー</th>
            <th>車種</th>
            <th>型式</th>
            <th>排気量</th>
            <th>駆動方式</th>
          </tr>
        </thead>
        <tbody>
          {carList.map((car) => (
            <tr key={car._id}>
              <td>
                <Link href={`/cars/${car._id}`}>{car._id}</Link>
              </td>
              <td>{car.manufacturer.name}</td>
              <td>{car.name}</td>
              <td>{car.modelName}</td>
              <td>{car.displacement}</td>
              <td>{car.drivetrains.system}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Cars

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const authResult = await checkAuth(context)

  if (
    !authResult.isAuthenticated ||
    authResult.userId !== process.env.NEXT_PUBLIC_ADMIN_ID
  ) {
    return {
      notFound: true
    }
  }

  const [manufacturersData, carsData, drivetrainsData] = await Promise.all([
    getManufacturers(),
    getCars(),
    getDrivetrains()
  ])
  let sortCarsData

  if (carsData)
    sortCarsData = carsData.sort((a, b) => {
      if (a.manufacturer.name < b.manufacturer.name) {
        return -1
      }
      if (a.manufacturer.name > b.manufacturer.name) {
        return 1
      }
      return 0
    })

  return {
    props: {
      cars: sortCarsData,
      manufacturers: manufacturersData,
      drivetrains: drivetrainsData
    }
  }
}
