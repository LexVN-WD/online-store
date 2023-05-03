
export default function PopularProducts({topRated, apparel, accessories, tools, display}) {
  return (
    <div>
      <ul className="flex flex-row h-[70%] w-full justify-around items-center space-x-4 text-center p-1">
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 1</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 2</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 3</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 4</li>
        <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Item 5</li>
      </ul>
    </div>
  )
}