import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    try {
      await axios.post('/api/auth/login', { email, password })
      router.push('/')
    } catch (error) {
      console.log(error)
      setError('メールアドレスまたはパスワードが間違っています。')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">ログイン</h1>
        {error && (
          <div className="bg-red-200 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
              placeholder="メールアドレス"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              パスワード
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
              placeholder="パスワード"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
