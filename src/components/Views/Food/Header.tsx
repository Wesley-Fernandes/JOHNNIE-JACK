"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'

export const Header = () => {

  const {back} = useRouter();
  return (
    <header className="h-14 flex items-center px-4 bg-transparent border-b border-b-yellow-600 bg-gradient-to-r from-yellow-300 to-amber-500">
        <Button onClick={back} variant="outline"><ArrowLeft/></Button>
    </header>
  )
}
