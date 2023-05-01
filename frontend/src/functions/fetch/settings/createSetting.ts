import axios from 'axios'

const createSetting = async (
  mycarId: string,
  tireId: string,
  freeText: string
) => {
  try {
    const res = await axios.post('/api/settings', {
      mycarId,
      tireId,
      freeText
    })

    return res
  } catch (error) {
    console.error(error)
    return null
  }
}

export default createSetting
