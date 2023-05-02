import axios from 'axios'

const deleteSetting = async (id: string) => {
  try {
    await axios.delete(`/api/settings/`, { params: { id } })
    return true
  } catch (error) {
    console.error('Failed to delete setting', error)
    return false
  }
}

export default deleteSetting
