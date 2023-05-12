import NavBar from "../../components/NavBar";
import Categories from "../../components/Categories";

export default function CategoriesPage() {
  return (
    <>
      <div className="h-screen w-screen">
        <NavBar />
        <h1>Categories</h1>
        <Categories />
      </div>
    </>
  );
}