import { MdStore } from 'react-icons/md'
import Cart from './Cart'
import User from './User'


export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row h-full justify-evenly w-full text-black border-b border-black">
        <div className='flex flex-row justify-center items-center h-[8vh] w-[10vw] absolute top-0 left-0'>
          <MdStore className='h-full w-[35%] pl-2'/>
          <div className='flex flex-col justify-center items-center text-md text-center font-bold p-3'>
            <p className='w-full h-full'>LexVN</p>
            <p className='w-full h-full'>Online-Store</p>
          </div>
        </div>
        <div className='flex flex-row h-full w-[90vw]'>
          <ul className="flex flex-row justify-evenly items-center h-[8vh] w-[50vw] text-xl font-semibold text-center absolute top-0 left-[25%] z-20">
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
          <div className='w-[5vw] h-[8vh] flex flex-row absolute top-0 right-0'>
            <User />
            <Cart />
          </div>
        </div>
      </nav>
    </>
  )
}

