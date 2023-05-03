import { Carousel } from "flowbite-react"

export default function Slideshow() {
  return(
    <>
    <section className="h-full w-full">
      <div className="h-full w-full">
        <Carousel slideInterval={3000} className="bg-black w-full h-full">
          <div className='flex flex-row justify-center h-full w-full'>
            <img src="/static/products/apparel5.jpg" alt="Apparel 5" className="object-contain h-full w-full"></img>
            <img src="/static/products/apparel4.jpg" alt="Apparel 4" className="object-contain h-full w-full"></img>
          </div>
          <div className='flex flex-row justify-center h-full w-full'>
            <img src="/static/products/accessories3.jpg" alt="Accessories 3" className="object-contain h-full w-full"></img>
            <img src="/static/products/accessories4.jpg" alt="Accessories 4" className="object-contain h-full w-full"></img>
          </div>
          <div className='flex flex-row justify-center h-full w-full'>
            <img src="/static/products/tools3.jpg" alt="Tools 3" className="object-contain h-full w-full"></img>
            <img src="/static/products/tools1.jpg" alt="Top-Rated 2" className="object-contain h-full w-full"></img>
          </div>
        </Carousel>
      </div>
    </section>
    </>
  )
}