import NavBar from "../../../components/NavBar";
import ProductList from "../../../components/ProductList";

export default function HomeInteriorPage() {
  return (
    <>
      <div className="h-screen min-w-screen">
        <NavBar />
        <h1>Home Interior</h1>
        <ProductList />
      </div>
    </>
  );
}