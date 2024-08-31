import React from 'react'
import { buttonVariants } from '../ui/button'
import { Bolt } from 'lucide-react'
import Link from 'next/link'

export function Configuration() {
  return (
    <Link href="/configuration" className={buttonVariants({variant:"outline", size:"icon"}).concat(" hover:text-red-500")} >
        <Bolt strokeWidth={1} />
    </Link>
  )
}
