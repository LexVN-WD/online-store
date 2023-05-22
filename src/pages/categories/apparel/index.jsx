import NavBar from "../../../components/NavBar";
import ProductList from "../../../components/ProductList";

export default function ApparelPage() {
  return (
    <>
      <div className="h-screen min-w-screen">
        <NavBar />
        <h1>Apparel</h1>
        <ProductList />
      </div>
    </>
  );
}