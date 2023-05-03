
export default function PopularProducts({topRated, apparel, accessories, tools}) {
  return (
    <div className="h-full w-full">
      {topRated === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel1.jpg" alt="Top-Rated 1" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel2.jpg" alt="Top-Rated 2" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories1.jpg" alt="Top-Rated 3" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories2.jpg" alt="Top-Rated 4" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools1.jpg" alt="Top-Rated 5" className="object-contain h-full"></img>
          </li>
        </ul>
      )}

      {apparel === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel1.jpg" alt="Apparel 1" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel2.jpg" alt="Apparel 2" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel3.jpg" alt="Apparel 3" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel4.jpg" alt="Apparel 4" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/apparel5.jpg" alt="Apparel 5" className="object-contain h-full"></img>
          </li>
        </ul>
      )}

      {accessories === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories1.jpg" alt="Accessories 1" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories2.jpg" alt="Accessories 2" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories3.jpg" alt="Accessories 3" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories4.jpg" alt="Accessories 4" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/accessories5.jpg" alt="Accessories 5" className="object-contain h-full"></img>
          </li>
        </ul>
      )}

      {tools === true && (
        <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools1.jpg" alt="Tools 1" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools2.jpg" alt="Tools 2" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools3.jpg" alt="Tools 3" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools4.jpg" alt="Tools 4" className="object-contain h-full"></img>
          </li>
          <li className="flex flex-col justify-center border hover:border-2 border-black h-full w-full">
            <img src="/static/products/tools5.jpg" alt="Tools 5" className="object-contain h-full"></img>
          </li>
        </ul>
      )}
    </div>
  )
}