import axios from 'axios'

const deleteCar = async (id: string) => {
  try {
    await axios.delete(`/api/cars/`, { params: { id } })
    return true
  } catch (error) {
    console.error('Failed to delete cars', error)
    return false
  }
}

export default deleteCar
