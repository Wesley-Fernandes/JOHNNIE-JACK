import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Section = ({children}:Props) => {
  return (
    <section className="h-[calc(100%-7rem)] container grid grid-cols-7 gap-2 p-1 ">
        {children}
    </section>
  )
}
