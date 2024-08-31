import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Logout } from './Logout'
import { Configuration } from './Configuration'
import { Cart } from './Cart'

export function User() {
  return (
    <div className='flex flex-1 items-end'>
      <div className='border w-full py-2 px-2 rounded-md flex flex-col shadow-md'>
        <div className='pb-2 flex items-center gap-2'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='font-bold'>Nome do usuario</h1>
        </div>
          <div className=' border-t pt-3'>
              <div className='flex items-center gap-2'>
                  <Configuration/>
                  <Cart/>
                  <Logout/>
              </div>
          </div>
         </div>
    </div>
  )
}
