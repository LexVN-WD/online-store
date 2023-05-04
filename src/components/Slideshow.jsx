import { Carousel } from "flowbite-react"

export default function Slideshow() {
  return(
    <>
    <section className="h-full w-full pt-2">
      <div className="h-full w-full">
        <Carousel slideInterval={3000} className="bg-gray-400 w-full h-full rounded-lg border-2 border-black">
          <div className='flex flex-row justify-evenly items-center h-full w-full'>
            <img src="/static/products/apparel5.jpg" alt="Apparel 5" className="absolute top-0 left-0 translate-y-[5%] translate-x-[15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <img src="/static/products/apparel4.jpg" alt="Apparel 4" className="absolute top-0 right-0 translate-y-[5%] translate-x-[-15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <div className="h-full w-full">
              <div className="h-[25%] w-[25%] bg-gray-500/50 flex justify-center items-center absolute top-0 left-0 translate-x-[150%] translate-y-[125%] rounded-lg">
                <p className="text-white text-center text-5xl font-bold">APPAREL</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-evenly items-center h-full w-full'>
            <img src="/static/products/accessories3.jpg" alt="Accessories 3" className="absolute top-0 left-0 translate-y-[5%] translate-x-[15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <img src="/static/products/accessories4.jpg" alt="Accessories 4" className="absolute top-0 right-0 translate-y-[5%] translate-x-[-15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <div className="h-full w-full">
              <div className="h-[25%] w-[25%] bg-gray-500/60 flex justify-center items-center absolute top-0 left-0 translate-x-[150%] translate-y-[125%] rounded-lg">
                <p className="text-white text-center text-5xl font-bold">ACCESSORIES</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-evenly items-center h-full w-full'>
            <img src="/static/products/tools3.jpg" alt="Tools 3" className="absolute top-0 left-0 translate-y-[5%] translate-x-[15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <img src="/static/products/tools1.jpg" alt="Top-Rated 2" className="absolute top-0 right-0 translate-y-[5%] translate-x-[-15%] object-fill object-center h-[90%] w-[30%] rounded-2xl border border-black"></img>
            <div className="h-full w-full">
              <div className="h-[25%] w-[25%] bg-gray-500/50 flex justify-center items-center absolute top-0 left-0 translate-x-[150%] translate-y-[125%] rounded-lg">
                <p className="text-white text-center text-5xl font-bold">TOOLS</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
    </>
  )
}