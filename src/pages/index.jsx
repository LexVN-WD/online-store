// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"
import Slideshow from "../components/Slideshow"

export default function Home() {
  return (
   <>
   <div className="h-screen w-screen">
     <div className="h-[10vh] w-full">
       <NavBar />
     </div>
     <main className="h-[90vh] w-full overflow-auto">
      <section className="h-[80vh] w-full flex justify-center">
        <Slideshow />
      </section>
      <section className="h-[50vh] w-full flex justify-center">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}