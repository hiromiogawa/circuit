import axios from 'axios'

const createSetting = async (
  mycarId: string,
  tireId: string,
  freeText: string
) => {
  try {
    const res = await axios.post('/api/settings/create', {
      mycarId,
      tireId,
      freeText
    })

    return res.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default createSetting
