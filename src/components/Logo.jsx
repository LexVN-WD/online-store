export default function Logo() {
  return (
    <div className="flex flex-row h-full w-full justify-center">
      <img src="/static/empirelogo.png" alt='logo' className=" w-[30%] h-full bg-white object-contain p-2"></img>
      <img src="/static/logoname.png" alt="logoname" className="w-[70%] object-contain h-full px-2"></img>
    </div>
  )
}