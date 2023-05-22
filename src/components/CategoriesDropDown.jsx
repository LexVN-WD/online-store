import Link from "next/link";


export default function CategoriesDropDown() {
  return (
    <>
      <div className="absolute flex justify-center z-30 h-[20vh] w-full bg-black/50 text-black">
        <div className='h-full w-[90%] flex flex-row justify-around items-center gap-10'>
          <button className="bg-[url('/static/categories/home-interior.jpeg')] bg-cover bg-top h-3/4 w-1/4 rounded-lg">
            <Link href='/categories/homeinterior' className='h-full w-full text-4xl text-white m-6 p-3 font-bold bg-black/50 rounded-lg'>Home Interior</Link>
          </button>
          <button className="bg-[url('/static/categories/apparel.jpeg')] bg-cover bg-right-bottom h-3/4 w-1/4 rounded-lg">
            <Link href='/categories/apparel' className='h-full w-full text-4xl text-white m-6 p-3 font-bold bg-black/50 rounded-lg'>Apparel</Link>
          </button>
          <button className="bg-[url('/static/categories/kitchen.jpeg')] bg-cover bg-right-bottom h-3/4 w-1/4 rounded-lg">
            <Link href='/categories/kitchen' className='h-full w-full text-4xl text-white m-6 p-3 font-bold bg-black/50 rounded-lg'>Kitchen</Link>
          </button>
          <button className="bg-[url('/static/categories/accessories.jpeg')] bg-cover h-3/4 w-1/4 rounded-lg">
            <Link href='/categories/accessories' className='h-full w-full text-4xl text-white m-6 p-3 font-bold bg-black/50 rounded-lg'>Accessories</Link>
          </button>
        </div>
      </div>
    </>
  );
}