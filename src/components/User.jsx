import { MdAccountBox } from 'react-icons/md';

export default function User() {
  return (
    <>
      <div className="h-full w-[50%] flex flex-row justify-between items-center p-2 hover:border-x border-black hover:bg-white hover:text-black">
      <div className='h-[50%] w-full p-2 text-center text-2xl'>
        <button>
          <MdAccountBox />
        </button>
      </div>
    </div>
    </>
  )
}