import { Buy } from './Buy'
import { calculateCartItems } from '@/lib/calculation'
import type { ItemType } from '@/types/Order'

export const Footer = ({cart}:{cart:ItemType[]}) => {
  return (
    <footer className="h-14 border-t border-t-yellow-600 bg-gradient-to-r from-yellow-300 to-amber-500 px-4 flex items-center justify-between">
        <Buy/>
        <div className="flex flex-col items-end">
          <span className="font-bold text-white">{calculateCartItems({cart})}</span>
          <span className="text-xs pl-2 text-white">({cart.length} itens)</span>
        </div>
    </footer>
  )
}
