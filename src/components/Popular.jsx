import { useState } from 'react'
import PopularProducts from './PopularProducts';


export default function Popular() {
  const [topRated, setTopRated] = useState(true);
  const [apparel, setApparel] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [tools, setTools] = useState(false);
  
  const handleTopRated = () => {
    setTopRated(true);
    setApparel(false);
    setAccessories(false);
    setTools(false);
  };

  const handleApparel = () => {
    setTopRated(false);
    setApparel(true);
    setAccessories(false);
    setTools(false);
  };

  const handleAccessories = () => {
    setTopRated(false);
    setApparel(false);
    setAccessories(true);
    setTools(false);
  };

  const handleTools = () => {
    setTopRated(false);
    setApparel(false);
    setAccessories(false);
    setTools(true);
  };


  return (
    <>
    <div className=" flex flex-col justify-center items-center h-full w-[80%] space-y-2">
      <div className=" flex items-center text-2xl font-bold h-[20%] p-1">
        <h2>Popular Items</h2>
      </div>
      <div className='flex flex-row h-[10%] justify-evenly w-[80%] border-b border-black'>
        <button 
          className={`${topRated === true ? 'border-b-2 border-black' : 'hover:border-b-2 border-black' } `}
          onClick={handleTopRated}
          >
          Top Rated
        </button>
        <button 
          className={`${apparel === true ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}`}
          onClick={handleApparel}
        >
          Apparel
        </button>
        <button 
          className={`${accessories === true ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}`}
          onClick={handleAccessories}
          >
          Accessories
        </button>
        <button 
          className={`${tools === true ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}`}
          onClick={handleTools}
          >
          Tools
        </button>
      </div>
      <div className="flex flex-row h-[70%] w-full">
        <PopularProducts topRated={topRated} apparel={apparel} accessories={accessories} tools={tools} />
      </div>
    </div>
    </>
  )
}