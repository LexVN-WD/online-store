// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"


export default function Home() {
  return (
   <>
   <div className="h-screen w-screen">
     <NavBar />
     <main className="h-[90%] w-full">
      <section className="h-[50%] w-full flex justify-center">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}
