import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Aside = ({children}:Props) => {
  return (
    <aside className="col-span-1 flex flex-col gap-2 pb-2 mt-2">
        {children}
    </aside>
  )
}
