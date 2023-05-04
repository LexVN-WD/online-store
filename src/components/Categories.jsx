import Link from 'next/link'

import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})


export default function Categories() {
  return (
    <>
    <div className={`h-[60vh] w-[80vw] flex flex-row ${lato.className} shadow-md shadow-black`}>
      <div className="relative flex flex-row h-full w-[35%]">
        <Link href='/categories/homeinterior' className='h-full w-full bg-black'>
            <img src="/static/categories/home-interior.jpeg" className="h-full w-full object-fill hover:opacity-80" alt='homeinterior'></img>
            <p className='absolute bottom-0 left-0 text-4xl text-white m-6 p-1 font-bold bg-black/50 rounded-lg'>Home Interior</p>
        </Link>
      </div>
      <div className="relative flex flex-row h-full w-[65%]">
        <div className="h-full w-[40%] text-white bg-black">
          <Link href='/categories/apparel' className='h-full w-full'>
            <img src="/static/categories/apparel.jpeg" className="h-full w-full object-cover hover:opacity-80" alt='apparel'></img>
            <p className='absolute bottom-0 left-0 text-4xl text-white m-6 p-1 font-bold bg-black/50 rounded-lg'>Apparel</p>
          </Link>
        </div>
        <div className="relative flex flex-col h-full w-[60%]">
          <div className="h-1/2 w-full text-white bg-black">
            <Link href='/categories/kitchen' className='h-full w-full'>
              <img src="/static/categories/kitchen.jpeg" className="h-full w-full object-cover hover:opacity-80" alt='kitchen'></img>
              <p className='absolute bottom-1/2 left-0 text-4xl text-white m-6 p-1 font-bold bg-black/50 rounded-lg'>Kitchen</p>
            </Link>
          </div>
          <div className="h-1/2 w-full text-white bg-black">
            <Link href='/categories/accessories' className='h-full w-full'>
              <img src="/static/categories/accessories.jpeg" className="h-full w-full object-cover hover:opacity-80" alt='accessories'></img>
              <p className='absolute bottom-0 left-0 text-4xl text-white m-6 p-1 font-bold bg-black/50 rounded-lg'>Accessories</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}