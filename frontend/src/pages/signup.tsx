import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    try {
      await axios.post('/api/users/signup', {
        username,
        email,
        password
      })
      router.push('/login')
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message)
      } else {
        setError('アカウントの作成に失敗しました。')
      }
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">新規登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
          placeholder="ユーザー名"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
          placeholder="メールアドレス"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 text-black border border-gray-300 rounded"
          placeholder="パスワード"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          登録
        </button>
      </form>
    </div>
  )
}

export default SignUp
