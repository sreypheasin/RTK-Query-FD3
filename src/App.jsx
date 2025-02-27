import ProductCardSkeleton from "./components/skeleton/ProductCardSkeleton";
import ProductCard from "./components/cards/ProductCard";
import { useGetAllProductsQuery } from "./features/products/productSlice";

function App() {
  const { data: productData, isLoading } = useGetAllProductsQuery();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(productData);

  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="text-blue-900 text-3xl font-bold">Home page</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading &&
          skeleton.map((index) => <ProductCardSkeleton key={index} />)}
        {!isLoading &&
          productData?.products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              rating={product.rating}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
