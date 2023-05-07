import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

// myFunctions
import checkAuth from '@/functions/fetch/auth/checkAuth'
import getCar from '@/functions/fetch/cars/getCar'
import convertNumberValue from '@/functions/convertNumberValue'
import getManufacturers from '@/functions/fetch/manufacturers/getManufacturers'
import getDrivetrains from '@/functions/fetch/driveTrains/get'
import deleteCar from '@/functions/fetch/cars/delete'

// components
import SelectManufacturers from '@/components/atoms/button/SelectManufacturers'
import SelectDriveTrains from '@/components/atoms/button/SelectDriveTrains'

// types
import type { CarType, ManufacturerType, DrivetrainType } from '@/types/data'

type PropTypes = {
  car: CarType
  manufacturers: ManufacturerType[]
  driveTrains: DrivetrainType[]
}

const Car = ({ car, manufacturers, driveTrains }: PropTypes) => {
  const [carValue, setCarValue] = useState<CarType>(car)
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    const convertedValue = convertNumberValue(value)
    setCarValue((prevState) => ({ ...prevState, [name]: convertedValue }))
  }

  const handleDelete = async () => {
    if (window.confirm('削除しますか？')) {
      try {
        await deleteCar(car._id)
        router.push('/cars/')
      } catch (error: any) {
        window.alert(`削除に失敗しました: ${error.message}`)
      }
    }
  }

  return (
    <>
      <form>
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
                  value={carValue.manufacturer._id}
                  handleChange={handleChange}
                  manufacturers={manufacturers}
                />
              </td>
              <td>
                <input
                  name="name"
                  type="text"
                  value={carValue.name || ''}
                  onChange={handleChange}
                />
              </td>

              <td>
                <input
                  name="modelName"
                  type="text"
                  value={carValue.modelName || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="displacement"
                  type="text"
                  value={carValue.displacement || ''}
                  onChange={handleChange}
                  inputMode="decimal"
                />
              </td>
              <td>
                <SelectDriveTrains
                  value={carValue.drivetrains._id}
                  handleChange={handleChange}
                  driveTrains={driveTrains}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          disabled={
            !carValue.name ||
            !carValue.manufacturer.name ||
            !carValue.name ||
            !car.modelName ||
            !car.displacement ||
            !car.drivetrains.system
          }
        >
          変更
        </button>
      </form>
      <button onClick={handleDelete}>削除する</button>
    </>
  )
}

export default Car

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carId = context.params!.carId as string
  const [car, authResult, manufacturers, driveTrains] = await Promise.all([
    getCar(carId),
    checkAuth(context),
    getManufacturers(),
    getDrivetrains()
  ])

  // データが存在しない場合、404 ページを表示
  if (
    (!car && !authResult.isAuthenticated) ||
    authResult.userId !== process.env.NEXT_PUBLIC_ADMIN_ID
  ) {
    return {
      notFound: true
    }
  }

  // データを props として渡す
  return {
    props: {
      car,
      manufacturers,
      driveTrains
    }
  }
}
