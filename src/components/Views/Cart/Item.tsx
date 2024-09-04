"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Minus, Plus } from 'lucide-react'
import type { ItemType } from '@/types/Order'
import { calculateTotal } from '@/lib/calculation'
import { Badge } from '@/components/ui/badge'

interface Props{
    item:  ItemType
    addQuantity: (id: string) => void;
    removeQuantity: (id: string) => void;
}
export const Item = ({item, addQuantity, removeQuantity}:Props) => {
  if(!item) return null
  const price = calculateTotal({complements: [], data: item, quantity: item.quantity})
  return (
    <Card className="col-span-1 flex items-center min-h-32 auto-rows-min max-h-fit gap-2 px-2 shadow-md" key={item.id}>
                <div className="h-28 w-32 rounded-md overflow-hidden bg-secondary">
                  <img src={item.thumbnail} alt={item.name} className="h-full w-full object-fill p-1 rounded-lg"/>
                </div>
                <div className="flex flex-col justify-start flex-1 h-full gap-1">
                  <h2 className="font-bold capitalize pt-1">
                    <Link href={`/food/${item.id}`}>
                      {item.name}
                    </Link>
                  </h2>
                  <Badge className='w-fit' variant="outline">{item.category}</Badge>
                  <div>
                    <ul>
                      {item.complements?.map((c)=>(
                        <li key={c.name} className="flex justify-between text-xs font-normal text-secondary-foreground/50">
                          <span>{c.name}</span>
                          <span className="text-secondary-foreground/50">+ {c.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                    <div className="flex flex-1 justify-between items-end pb-2">
                    <div className="flex items-center w-fit gap-1">
                      <Button size="icon"className='bg-yellow-400 hover:bg-yellow-600' onClick={()=>addQuantity(item.id)}>
                          <Plus/>
                      </Button>
                      <Input value={item.quantity} className='w-8 p-0 text-center border-none' disabled/>
                      <Button size="icon" className='bg-yellow-400 hover:bg-yellow-600' onClick={()=>removeQuantity(item.id)}>
                          <Minus/>
                      </Button>
                    </div>
                    <span className="font-bold pointer-events-none">{price}</span>
                  </div>
                </div>
            </Card>
  )
}
