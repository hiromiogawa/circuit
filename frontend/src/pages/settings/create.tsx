import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'
import getTires from '@/functions/fetch/tires/getTires'

import SettingForm from '@/components/organisms/settingForm'

import type { TireManufacturerType, TireType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  mycars: GetMycarType[] | false
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialMycar: string
}

const CreateSetting = ({
  isAuthenticated,
  mycars,
  tireManufacturers,
  tires,
  initialMycar
}: PropTypes) => {
  const router = useRouter()

  if (!isAuthenticated) router.push('/login')
  if (!mycars) router.push('/mycar/create')

  if (!isAuthenticated || !mycars) {
    return null
  }

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

  return {
    props: {
      mycars: myCarsData,
      tireManufacturers: tireManufacturersData,
      initialMycar,
      tires: tiresData,
      ...authResult
    }
  }
}
