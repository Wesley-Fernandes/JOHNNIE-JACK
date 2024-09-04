import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Section = ({children}:Props) => {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 gap-2 align-middle p-1">
        {children}
    </section>
  )
}
