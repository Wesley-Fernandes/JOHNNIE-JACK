'use client'
import { useAuth } from '@/hooks/useAuth'
import { User } from './User';
import Login from './Login';

export default function ConditionalUser() {
    const {user} = useAuth();
  return (
    <>
        {!user ? <Login/>:<User data={user}/>}
    </>
  )
}
