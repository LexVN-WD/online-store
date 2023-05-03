import { FaShoppingCart } from 'react-icons/fa'

export default function Cart() {
  return (
    <>
    <div className="h-full w-[50%] flex flex-row justify-between items-center p-2 border-x border-black">
      <div className='h-[50%] w-full p-2 text-center text-2xl'>
        <button>
          <FaShoppingCart />
        </button>
      </div>
    </div>
    </>
  )
}