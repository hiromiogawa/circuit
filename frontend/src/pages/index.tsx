import { useAuth } from '@/hooks/useAuth'
export default function Home() {
  const { user, isLoading } = useAuth()
  console.log(user)
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (user) {
    return <p>Welcome, {user.username}!</p>
  } else {
    return <p>Please log in.</p>
  }
}
