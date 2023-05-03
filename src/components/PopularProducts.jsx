
export default function PopularProducts({topRated, apparel, accessories, tools}) {
  return (
    <div className="h-full w-full">
      {topRated === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Top-Rated 1</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Top-Rated 2</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Top-Rated 3</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Top-Rated 4</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Top-Rated 5</li>
        </ul>
      )}

      {apparel === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Apparel 1</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Apparel 2</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Apparel 3</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Apparel 4</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Apparel 5</li>
        </ul>
      )}

      {accessories === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Accessories 1</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Accessories 2</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Accessories 3</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Accessories 4</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Accessories 5</li>
        </ul>
      )}

      {tools === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Tools 1</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Tools 2</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Tools 3</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Tools 4</li>
          <li className="flex flex-col justify-center bg-slate-200 hover:border border-black h-full w-full">Tools 5</li>
        </ul>
      )}
    </div>
  )
}