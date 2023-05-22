import NavBar from "../../../components/NavBar";
import ProductList from "../../../components/ProductList";

export default function KitchenPage() {
  return (
    <>
      <div className="h-screen min-w-screen">
        <NavBar />
        <h1>Kitchen</h1>
        <ProductList />
      </div>
    </>
  );
}