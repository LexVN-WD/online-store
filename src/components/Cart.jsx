import { MdShoppingCart } from 'react-icons/md'

export default function Cart() {
  return (
    <>
    <div className=" h-full w-[50%] flex flex-row items-center hover:border-x border-black hover:bg-gray-100">
      <div className='h-full w-full'>
        <button className='flex flex-col h-full w-full justify-center'>
          <MdShoppingCart className='h-[50%] w-full'/>
        </button>
      </div>
    </div>
    </>
  )
}