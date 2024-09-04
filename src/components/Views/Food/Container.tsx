import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <div className="flex flex-1 justify-center overflow-y-scroll">
        {children}
    </div>
  )
}
