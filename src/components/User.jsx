import { MdAccountBox } from 'react-icons/md';

export default function User() {
  return (
    <>
      <div className="h-full w-[50%] flex flex-row">
      <div className='h-full w-full'>
        <button className='flex flex-row h-[8vh] w-full items-center'>
          <MdAccountBox className='h-[40%] w-full hover:border border-black hover:bg-gray-100'/>
        </button>
      </div>
    </div>
    </>
  )
}