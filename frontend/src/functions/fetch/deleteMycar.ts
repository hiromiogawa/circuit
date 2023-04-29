import axios from 'axios'

const deleteMyCar = async (id: string) => {
  try {
    await axios.delete(`/api/mycar/delete?id=${id}`)
    return true
  } catch (error) {
    return false
  }
}

export default deleteMyCar
