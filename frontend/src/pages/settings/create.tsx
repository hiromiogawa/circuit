import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'
import getTires from '@/functions/fetch/tires/getTires'

import SettingForm from '@/components/organisms/SettingForm'

import type { TireManufacturerType, TireType } from '@/types/data'

// components
import Layout from '@/components/common/Layout'

type PropTypes = {
  mycars: GetMycarType[]
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialMycar: string
}

const CreateSetting = ({
  mycars,
  tireManufacturers,
  tires,
  initialMycar
}: PropTypes) => {
  return (
    <Layout>
      <SettingForm
        mycars={mycars}
        tireManufacturers={tireManufacturers}
        tires={tires}
        initialSettingValue={{ mycarId: initialMycar }}
        type="create"
      />
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

  if (!authResult.isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  if (!myCarsData) {
    return {
      redirect: {
        destination: '/mycar/create',
        permanent: false
      }
    }
  }

  return {
    props: {
      mycars: myCarsData,
      tireManufacturers: tireManufacturersData,
      initialMycar,
      tires: tiresData
    }
  }
}
