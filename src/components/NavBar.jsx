import { FaShoppingCart } from 'react-icons/fa'

import Cart from './Cart'

export default function NavBar() {
  return (
    <nav className="flex flex-row h-[10%] w-full">
      <ul className="flex flex-row justify-around items-center h-full w-[80%] text-lg font-semibold bg-slate-400 text-center">
        <li className="bg-slate-200 p-1 rounded-lg">
          <a href='/'>Home</a>
        </li>
        <li className="bg-slate-200 p-1 rounded-lg">
          <a href='/categories'>Shop</a>
        </li>
        <li className="bg-slate-200 p-1 rounded-lg">
          <a href='/about'>About</a>
        </li>
        <li className="bg-slate-200 p-1 rounded-lg">
          <a href='/contact'>Contact</a>
        </li>
      </ul>
      <div className='w-[20%] bg-slate-500'>
        <Cart />
      </div>
    </nav>
  )
}

