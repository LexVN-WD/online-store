// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"
import Slideshow from "../components/Slideshow"

export default function Home() {
  return (
   <>
   <div className="h-screen w-screen">
     <div className="h-[10%] w-full">
       <NavBar />
     </div>
     <main className="h-[90%] w-full">
      <section className="h-[50%] w-full flex justify-center">
        <Slideshow />
      </section>
      <section className="h-[40%] w-full flex justify-center">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}
