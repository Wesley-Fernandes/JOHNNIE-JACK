"use client"
import { useFood } from '@/hooks/useFood';
import React from 'react'
import { Complement } from './Complement';

export const ComplementOptional = () => {
    const {setComplements, removeComplement, food} = useFood();
  return (
    <div className="flex flex-col gap-1 p-1">
		{!food || food.complements.length < 1 ?(
            <span>Esse item não têm complementos.</span>) : (
            food.complements.map((complement) => (<Complement complement={complement} key={complement.id} setComplement={setComplements} removeComplement={removeComplement} />)
        ))}
	</div>
  )
}
