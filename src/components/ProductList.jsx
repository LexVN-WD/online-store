import Filter from "./Filter"

export default function ProductList() {
  return (
    <>
    <section className="h-full w-full bg-black/20">
      <div className="h-full w-full">
        <div className="h-full w-[20%] bg-black/30">
          <Filter />
        </div>
        <div></div>
      </div>
    </section>
    </>
  )
}