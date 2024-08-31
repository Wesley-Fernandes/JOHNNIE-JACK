import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import { Button } from '../ui/button'
import { User } from './User'
import { Links } from './Links'
export default function Menu() {
  return (
    <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-1 flex-col'>
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
           <Links/>
           <User/>
        </SheetContent>
    </Sheet>

  )
}
