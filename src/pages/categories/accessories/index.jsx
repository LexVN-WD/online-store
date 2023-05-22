import NavBar from "../../../components/NavBar";
import ProductList from "../../../components/ProductList";

export default function AccessoriesPage() {
  return (
    <>
      <div className="h-screen min-w-screen">
        <NavBar />
        <h1>Accessories</h1>
        <ProductList />
      </div>
    </>
  );
}