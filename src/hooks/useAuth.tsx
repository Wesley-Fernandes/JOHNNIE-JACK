/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useEffect, useState } from 'react'

export function useAuth() {
    const [user, setUser] = useState<User|null| false>(false);

    useEffect(()=>{
        return onAuthStateChanged(auth,(state)=> setUser(state));
    }, [])

    return {user};
}
