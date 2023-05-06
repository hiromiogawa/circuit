import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// myFunctions
import checkAuth from '@/functions/fetch/auth/checkAuth'
import getCar from '@/functions/fetch/cars/getCar'

// components
import Link from 'next/link'
import ImageUpload from '@/components/molecules/ImageUpload'

// types
import type { CarType } from '@/types/data'

type PropTypes = {
  car: CarType
}

const Car = ({ car }: PropTypes) => {
  const router = useRouter()

  console.log(car)

  // const handleDelete = async () => {
  //   if (window.confirm('マイカーから削除しますか？')) {
  //     try {
  //       await deleteMyCar(mycar._id)
  //       router.push('/')
  //     } catch (error: any) {
  //       window.alert(`削除に失敗しました: ${error.message}`)
  //     }
  //   }
  // }

  return (
    <>
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
          <tr key={car._id}>
            <td>{car._id}</td>
            <td>{car.manufacturer.name}</td>
            <td>{car.name}</td>
            <td>{car.modelName}</td>
            <td>{car.displacement}</td>
            <td>{car.drivetrains.system}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Car

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carId = context.params!.carId as string
  const [carData, authResult] = await Promise.all([
    getCar(carId),
    checkAuth(context)
  ])

  // データが存在しない場合、404 ページを表示
  if (
    (!carData && !authResult.isAuthenticated) ||
    authResult.userId !== process.env.NEXT_PUBLIC_ADMIN_ID
  ) {
    return {
      notFound: true
    }
  }

  // データを props として渡す
  return {
    props: {
      car: carData
    }
  }
}
