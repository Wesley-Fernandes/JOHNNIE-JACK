import React from 'react'

interface Props{
    label: string;
}
export const Header = ({label}:Props) => {
  return (
    <header className="min-h-14 h-14 flex w-full items-center px-4 bg-transparent border-b border-b-yellow-600 bg-gradient-to-r from-yellow-300 to-amber-500">
        <h1 className="font-black text-lg text-amber-800 uppercase">{label}</h1>
    </header>
  )
}
