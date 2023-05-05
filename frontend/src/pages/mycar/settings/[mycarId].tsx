import { GetServerSideProps } from 'next'
import getSettingsByMyCarId, {
  GetSettingsByMyCarIdType
} from '@/functions/fetch/settings/getByMycarId'

type PropTypes = {
  settings: GetSettingsByMyCarIdType
}

const mycarSettings = ({ settings }: PropTypes) => {
  return (
    <ul>
      {settings.map((setting) => (
        <li key={setting._id}>
          <p>{setting.tire.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default mycarSettings

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mycarId = context.params!.mycarId as string
  const settingsData = getSettingsByMyCarId(mycarId)

  // データを props として渡す
  return {
    props: {
      settings: settingsData
    }
  }
}
