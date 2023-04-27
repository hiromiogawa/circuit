import axios from 'axios'

const logout = async () => {
  try {
    await axios.post('/api/auth/logout')
    return true
  } catch (error) {
    console.error('ログアウトに失敗しました:', error)
    return false
  }
}

export default logout
