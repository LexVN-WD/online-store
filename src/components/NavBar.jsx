import Link from 'next/link'

import Cart from './Cart'
import User from './User'

import { Lato, Gugi } from 'next/font/google'

const lato = Lato({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})

const gugi = Gugi({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})



export default function NavBar() {
  return (
    <>
      <nav className={`flex flex-row justify-around items-center h-[10vh] w-full px-[10%] text-black z-20 border-b-2 border-black/30 shadow-md shadow-black bg-gray-100 ${gugi.className}`}>
        {/* Logo container */}
        <div className='h-full w-[50vw]'>
          <div className='h-full w-full px-4 py-4'>
            <Link href="/">
              <img src='/static/logo.png' className='h-[8vh] mb-0.5 pb-1'></img>
            </Link>
          </div>
        </div>
        {/* Nav links container */}
        <div className='flex flex-row h-[8vh] w-[35vw]'>
          {/* Nav Links */}
          <ul className="flex flex-row justify-evenly items-center h-[8vh] w-[35vw] text-xl text-center z-20">
            <li className="hover:bg-slate-200 hover:text-black hover:border-b-2 border-black">
              <a href='/categories'>Categories</a>
            </li>
            <li className="hover:bg-slate-200 hover:text-black hover:border-b-2 border-black">
              <a href='/faqs'>FAQs</a>
            </li>
          </ul>
          {/* User and Cart */}
          <div className='w-[5vw] h-[8vh] flex flex-row'>
            <User />
            <Cart />
          </div>
        </div> 
      </nav>
    </>
  )
}

