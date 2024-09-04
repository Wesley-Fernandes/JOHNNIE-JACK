import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Main = ({children}:Props) => {
  return (
    <main  className="min-h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] overflow-y-auto flex justify-center">
        {children}
    </main>
  )
}
