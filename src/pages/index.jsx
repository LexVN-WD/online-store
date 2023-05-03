// Components
import NavBar from "../components/NavBar"
import Popular from "../components/Popular"

import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


export default function Home() {
  return (
   <>
   <div className="h-screen w-screen">
    <div className='h-[10%] w-full'>
        <Canvas className='h-full w-full bg-black'>
          <Stars
            radius={400}
            depth={100}
            count={30000}
            factor={5}
            saturation={-1}
            fade={true}
        />
        </Canvas>
      </div>
     <div className="h-[10%] w-full bg-black">
       <NavBar />
     </div>
     <main className="h-[80%] w-full bg-slate-500">
      <section className="h-[50%] w-full flex justify-center">
        <Popular />
      </section>
     </main>
   </div>
   </>
  )
}
