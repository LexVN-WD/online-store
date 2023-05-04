export default function PopularProducts({topRated, home, apparel, kitchen, accessories}) {
  return (
    <div className="h-full w-full">
      {topRated === true && (
        <div className="h-full w-full flex flex-col justify-around py-[5%]">
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/home/home3.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app2.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/home/home8.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen2.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
          </ul>
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/home/home1.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/home/home6.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen4.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app8.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
        </div>
      )}

      {home === true && (
        <div className="h-full w-full flex flex-col justify-around py-[5%]">
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home1.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home2.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home3.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home4.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home5.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home6.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home7.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4 ">
              <img src="/static/products/home/home8.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
        </div>
      )}

     {apparel === true && (
        <div className="h-full w-full flex flex-col justify-around py-[5%]">
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app1.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app2.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app3.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app4.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1]">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app5.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app6.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app7.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/apparel/app8.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
        </div>
      )}

      {kitchen === true && (
        <div className="h-full w-full flex flex-col justify-around py-[5%]">
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen1.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen2.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen3.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen4.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
          <ul className="flex flex-row h-[40%] w-full justify-around items-center space-x-2 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen5.jpg" alt="Top-Rated 1" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen6.jpg" alt="Top-Rated 2" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen7.jpg" alt="Top-Rated 3" className="object-fill h-full w-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/kitchen/kitchen8.jpg" alt="Top-Rated 4" className="object-fill h-full w-full"></img>
            </li>
          </ul>
        </div>
      )}

      {accessories === true && (
        <div className="h-full w-full flex flex-col justify-around py-[5%]">
          <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories1.jpg" alt="Accessories 1" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories2.jpg" alt="Accessories 2" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories3.jpg" alt="Accessories 3" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories4.jpg" alt="Accessories 4" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories5.jpg" alt="Accessories 5" className="object-fill h-full"></img>
            </li>
          </ul>
          <ul className="flex flex-row h-full w-full justify-around items-center space-x-4 text-center p-1">
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories1.jpg" alt="Accessories 1" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories2.jpg" alt="Accessories 2" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories3.jpg" alt="Accessories 3" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories4.jpg" alt="Accessories 4" className="object-fill h-full"></img>
            </li>
            <li className="flex flex-col justify-center  hover:shadow-lg shadow-black h-full w-1/4 px-4">
              <img src="/static/products/accessories5.jpg" alt="Accessories 5" className="object-fill h-full"></img>
            </li>
          </ul>
        </div>
      )}

    </div>
  )
}