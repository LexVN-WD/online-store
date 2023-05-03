import { MdShoppingCart } from 'react-icons/md'

export default function Cart() {
  return (
    <>
    <div className="group/cart h-full w-[50%] flex flex-row justify-between items-center p-2 hover:border-x border-black hover:bg-slate-200 hover:text-black">
      <div className='h-full w-full p-2'>
        <button className='flex flex-col h-full w-full space-y-1'>
          <p className='invisible group-hover/cart:visible h-[50%] w-full'>Cart</p>
          <MdShoppingCart className='h-[50%] w-full'/>
        </button>
      </div>
    </div>
    </>
  )
}