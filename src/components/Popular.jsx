

export default function Popular() {
  return (
    <>
    <div className=" flex flex-col justify-center items-center h-full w-[80%] space-y-2">
      <div className=" flex items-center text-2xl font-bold h-[20%] p-1">
        <h2>Popular Items</h2>
      </div>
      <div className='flex flex-row h-[10%] justify-evenly w-[80%] border-b border-black'>
        <button className="hover:border-b-2 border-black">
          Top Rated
        </button>
        <button className="hover:border-b-2 border-black">
          Apparel
        </button>
        <button className="hover:border-b-2 border-black">
          Accessories
        </button>
        <button className="hover:border-b-2 border-black">
          Tools
        </button>
      </div>
      <ul className="flex flex-row h-[70%] w-full justify-around items-center space-x-4 text-center p-1">
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 1</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 2</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 3</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 4</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 5</li>
      </ul>
    </div>
    </>
  )
}