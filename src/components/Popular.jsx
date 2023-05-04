import { useState } from 'react'
import PopularProducts from './PopularProducts';

import { Lato, Gugi } from 'next/font/google'

const lato = Lato({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})

const gugi = Gugi({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})


export default function Popular() {
  const [topRated, setTopRated] = useState(true);
  const [home, setHome] = useState(false);
  const [apparel, setApparel] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [accessories, setAccessories] = useState(false);
  
  const handleTopRated = () => {
    setTopRated(true);
    setHome(false);
    setApparel(false);
    setKitchen(false);
    setAccessories(false);
  };

   const handleHome = () => {
    setTopRated(false);
    setHome(true);
    setApparel(false);
    setKitchen(false);
    setAccessories(false);
  };

  const handleApparel = () => {
    setTopRated(false);
    setHome(false);
    setApparel(true);
    setKitchen(false);
    setAccessories(false);
  };

  const handleKitchen = () => {
    setTopRated(false);
    setHome(false);
    setApparel(false);
    setKitchen(true);
    setAccessories(false);
  };

  const handleAccessories = () => {
    setTopRated(false);
    setHome(false);
    setApparel(false);
    setKitchen(false);
    setAccessories(true);
  };



  return (
    <>
    <div className=" flex flex-col justify-center items-center h-full w-[80%] space-y-2 text-black">
      <div className={`flex items-center text-2xl font-bold h-[20%] p-1 ${gugi.className}`}>
        <h2>Popular Items</h2>
      </div>
      <div className={`flex flex-row h-[10%] justify-evenly w-[80%] border-b border-black text-xl ${lato.className}`}>
        <button 
          className={`w-1/5 ${topRated === true ? 'border-b-2 border-black font-bold' : 'hover:border-b-2 border-black' } `}
          onClick={handleTopRated}
          >
          Top Rated
        </button>
        <button 
          className={`w-1/5 ${home === true ? 'border-b-2 border-black font-bold' : 'hover:border-b-2 border-black'}`}
          onClick={handleHome}
        >
          Home Interior
        </button>
        <button 
          className={`w-1/5 ${apparel === true ? 'border-b-2 border-black font-bold' : 'hover:border-b-2 border-black'}`}
          onClick={handleApparel}
        >
          Apparel
        </button>
        <button 
          className={`w-1/5 ${kitchen === true ? 'border-b-2 border-black font-bold' : 'hover:border-b-2 border-black'}`}
          onClick={handleKitchen}
          >
          Kitchen
        </button>
        <button 
          className={`w-1/5 ${accessories === true ? 'border-b-2 border-black font-bold' : 'hover:border-b-2 border-black'}`}
          onClick={handleAccessories}
          >
          Accessories
        </button>
      </div>
      <div className="flex flex-row h-[70%] w-full">
        <PopularProducts topRated={topRated} home={home} apparel={apparel} kitchen={kitchen} accessories={accessories} />
      </div>
    </div>
    </>
  )
}