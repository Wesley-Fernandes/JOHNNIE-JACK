import type { ReactNode } from 'react'

interface Props{
    children: ReactNode;
}
export const Items = ({children}:Props) => {
  return (
    <div className="p-2 auto-rows-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 h-[calc(100%-7rem)] overflow-y-scroll">
        {children}
    </div>
  )
}
