import Image from 'next/image'

export function Title() {
  return (
    <Image src="/JJ.png" alt='Johnnie Jack icon' height={80} width={100} priority className='w-14 h-12' />
  )
}
