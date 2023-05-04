// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"
import Slideshow from "../components/Slideshow"
import Categories from "../components/Categories"

export default function Home() {
  return (
   <>
   <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-white">
     <div className="bg-white w-full">
       <NavBar />
     </div>
     <main className="h-full w-full flex flex-col items-center">
      {/* <section className="pt-[15vh]">
        <Slideshow />
      </section> */}
      <section className="pt-[12vh]">
        <Categories />
      </section>
      <section className="h-full w-full flex justify-center pt-[10vh]">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}