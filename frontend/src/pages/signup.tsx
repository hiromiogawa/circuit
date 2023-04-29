import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import upload from '@/functions/upload'

const SignUp = () => {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (file) {
      const _filePath = await upload(file)
      setImagePath(_filePath)
    } else {
      setError('ファイルを登録してください')
    }
  }

  const postSignIn = async () => {
    try {
      await axios.post('/api/users/signup', {
        imagePath,
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

  useEffect(() => {
    if (imagePath) postSignIn()
  }, [imagePath])

  return (
    <div>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        {error && <p>{error}</p>}
        <button type="submit">登録</button>
      </form>
    </div>
  )
}

export default SignUp
