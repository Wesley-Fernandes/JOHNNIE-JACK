import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Aside = ({children}:Props) => {
  return (
    <aside className="col-span-7 md:col-span-3 grid grid-cols-1 gap-2 pb-2 mt-2 ">
        {children}
    </aside>
  )
}
