import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

export function Logout() {
  return (
    <Button size="icon" variant="destructive" className='flex flex-1' >
        <div className='flex items-center gap-2'>
          <LogOut />
          <span>Sair</span>
        </div>
    </Button>
  )
}
