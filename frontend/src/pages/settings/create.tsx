import { useState, ChangeEvent, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'
import getTires from '@/functions/fetch/tires/getTires'
import createSetting from '@/functions/fetch/settings/createSetting'

import type { TireManufacturerType, TireType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  myCars: GetMycarType[] | false
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialMycar: string
}

const CreateSetting = ({
  isAuthenticated,
  myCars,
  tireManufacturers,
  tires,
  initialMycar
}: PropTypes) => {
  const [selectManufacturer, setSelectManufacturer] = useState<
    TireManufacturerType[] | []
  >([])
  const [selectedMycar, setSelectedMycar] = useState<string>('')
  const [selectedTire, setSelectedTire] = useState<string>('')
  const [freeText, setFreeText] = useState<string>('')

  const router = useRouter()

  const handleTireManufacturerChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const sortCars = tires
      ? tires.filter((tire) => tire.manufacturer._id === event.target.value)
      : []
    setSelectManufacturer(sortCars)
  }

  const handleTireChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTire(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createSetting(selectedMycar, selectedTire, freeText)
    console.log(result)
    if (!result) {
      console.error('Failed to create setting')
    } else {
      console.log('Setting created successfully')
      router.push(`/settings/${result.data._id}`)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      setSelectedMycar(initialMycar)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        {myCars && (
          <select
            value={initialMycar}
            onChange={(e) => setSelectedMycar(e.target.value)}
          >
            <option value="">マイカーを選択してください</option>
            {myCars.map((myCar) => (
              <option key={myCar._id} value={myCar._id}>
                {myCar.car.name} {myCar.car.modelName}
              </option>
            ))}
          </select>
        )}

        {tireManufacturers && (
          <select onChange={handleTireManufacturerChange}>
            <option value="">タイヤメーカーを選択してください</option>
            {tireManufacturers.map((manufacturer) => (
              <option key={manufacturer._id} value={manufacturer._id}>
                {manufacturer.name}
              </option>
            ))}
          </select>
        )}

        {selectManufacturer.length > 0 && (
          <select onChange={handleTireChange}>
            <option value="">タイヤを選択してください</option>
            {selectManufacturer.map((tire) => (
              <option key={tire._id} value={tire._id}>
                {tire.name}
              </option>
            ))}
          </select>
        )}

        <textarea
          onChange={(e) => setFreeText(e.target.value)}
          value={freeText}
          placeholder="フリーテキスト (オプション)"
        ></textarea>

        <button type="submit" disabled={!selectedMycar && !selectedTire}>
          設定を追加
        </button>
      </form>
    </Layout>
  )
}

export default CreateSetting

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [authResult, myCarsData, tireManufacturersData, tiresData] =
    await Promise.all([
      checkAuth(context),
      getMycars(context),
      getTireManufacturers(),
      getTires()
    ])

  const initialMycar = context.query.mycar || ''

  return {
    props: {
      myCars: myCarsData,
      tireManufacturers: tireManufacturersData,
      initialMycar,
      tires: tiresData,
      ...authResult
    }
  }
}
