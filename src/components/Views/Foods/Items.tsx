import type { FoodFullInterface } from '@/types/food'
import React from 'react'
import { Item } from './Item'

interface Props{
    data: FoodFullInterface[]
}

export const Items = ({data}:Props) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full'>
		  {data.map((i) => (<Item {...i} key={i.id} />))}
    </ul>
  )
}
