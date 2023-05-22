import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

import Cart from './Cart'
import User from './User'
import CategoriesDropDown from './CategoriesDropDown'
import logo from '../../public/static/logo.png'

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

  const [showDropDown, setShowDropDown] = useState(false)

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown)
  } 

  return (
    <>
      <nav className={`flex flex-row justify-between items-center h-[10vh] w-full px-[10%] text-black z-20 border-b-2 border-black/30 shadow-md shadow-black bg-gray-100 ${lato.className}`}>
        {/* Logo container */}
        <div className='h-full w-[15vw]'>
          <div className='h-full w-full px-4 py-4'>
            <Link href="/">
              <Image src={logo} className='h-[8vh] mb-0.5 pb-1 object-contain' alt='logo'></Image>
            </Link>
          </div>
        </div>
        {/* Nav links container */}
        <div className='flex flex-row h-[8vh] w-[35vw]'>
          {/* Nav Links */}
          <ul className="flex flex-row justify-evenly items-center h-[8vh] w-[35vw] text-2xl font-bold text-center z-20">
            <li className="hover:bg-slate-200 hover:text-black hover:border-b-2 border-black">
              <div className='relative inline-block'>
                <button onClick={dropDownHandler} >Categories</button>
              </div>
            </li>
            <li className="hover:bg-slate-200 hover:text-black hover:border-b-2 border-black">
              <Link href='/faqs'>FAQs</Link>
            </li>
          </ul>
          {/* User and Cart */}
          <div className='w-[5vw] h-[8vh] flex flex-row'>
            <User />
            <Cart />
          </div>
        </div> 
      </nav>
      {showDropDown && <CategoriesDropDown />}
    </>
  )
}

