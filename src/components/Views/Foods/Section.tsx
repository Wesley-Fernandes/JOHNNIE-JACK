import  type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}
export const Section = ({children}:Props) => {
  return (
    <section className='p-4 flex flex-col h-[calc(100%-3.5rem)] gap-4 md:container overflow-y-auto'>
        {children}
    </section>
  )
}
