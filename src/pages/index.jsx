// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"
import Slideshow from "../components/Slideshow"
import Categories from "../components/Categories"
import CategoriesDropDown from "../components/CategoriesDropDown"

export default function Home() {
  return (
   <>
   <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-[#3d9970]/20 bg-wood">
     <div className=" relative w-full">
        <NavBar />
        <CategoriesDropDown />
     </div>
     <main className="h-full w-full flex flex-col items-center">
      {/* <section className="pt-[15vh]">
        <Slideshow />
      </section> */}
      <section className="py-[5vh]">
        <Categories />
      </section>
      <section className="h-full w-full flex justify-center py-[5vh]">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}