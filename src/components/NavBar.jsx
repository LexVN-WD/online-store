import Cart from './Cart'
import User from './User'


export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row h-[100%] justify-between w-full text-black border-b-4 border-black z-20">
        <ul className="flex flex-row justify-around items-center h-full w-[50%] text-lg font-semibold text-center">
          <li className="hover:bg-slate-200 hover:text-black p-2 rounded-lg hover:border border-black">
            <a href='/'>Home</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black p-2 rounded-lg hover:border border-black">
            <a href='/categories'>Shop</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black p-2 rounded-lg hover:border border-black">
            <a href='/about'>About</a>
          </li>
          <li className="hover:bg-slate-200 hover:text-black p-2 rounded-lg hover:border border-black">
            <a href='/contact'>Contact</a>
          </li>
        </ul>
        <div className='w-[20%] h-full flex flex-row'>
          <Cart />
          <User />
        </div>
      </nav>
    </>
  )
}

