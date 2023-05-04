import Cart from './Cart'
import User from './User'


export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row h-[100%] justify-between w-full text-black z-20 border-b border-black">
        <ul className="flex flex-row justify-around items-center h-full w-[50%] text-lg font-semibold text-center">
          <li className="hover:bg-slate-200 hover:text-black pb-1 hover:border-b-2 border-black">
            <a href='/'>Home</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black pb-1 hover:border-b-2 border-black">
            <a href='/categories'>Shop</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black pb-1 hover:border-b-2 border-black">
            <a href='/about'>About</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black pb-1 hover:border-b-2 border-black">
            <a href='/contact'>Contact</a>
          </li>
        </ul>
        <div className='w-[10%] h-full flex flex-row'>
          <Cart />
          <User />
        </div>
      </nav>
    </>
  )
}

