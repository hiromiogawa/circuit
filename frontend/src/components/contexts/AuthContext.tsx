import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

type User = {
  _id: string
  username: string
}

type AuthContextData = {
  user: User | null
  isLoading: boolean
  setUser: (value: User) => void
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  isLoading: true,
  setUser: () => {},
  login: async () => {},
  logout: () => {}
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password })
      const token = response.data.access_token
      localStorage.setItem('access_token', token)

      const userResponse = await axios.get('/api/users/', {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUser(userResponse.data)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    setUser(null)
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('access_token')
        if (!token) {
          setIsLoading(false)
          return
        }

        const response = await axios.get('/api/users/', {
          headers: { Authorization: `Bearer ${token}` }
        })

        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
