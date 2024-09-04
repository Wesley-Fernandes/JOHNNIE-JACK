import type { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

export const Main = ({children}:Props) => {
  return (
    <main  className="min-h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] flex-col flex w-screen justify-center">
        {children}
    </main>
  )
}
