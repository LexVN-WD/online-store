// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"
import Slideshow from "../components/Slideshow"

export default function Home() {
  return (
   <>
   <div className="min-h-screen min-w-screen max-w-screen bg-gray-100">
     <div className="h-[8vh] w-full bg-gray-200">
       <NavBar />
     </div>
     <main className="h-full w-full flex flex-col items-center">
      <section className="h-[70vh] w-[90vw]">
        <Slideshow />
      </section>
      <section className="h-[40vh] w-full flex justify-center">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}