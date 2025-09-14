import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName"

// Define the SearchPage component, which receives searchParams as a prop
async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
     query: string; 
    }>;
}) {
  // Extract the 'query' parameter from the searchParams object
  const { query } = await searchParams;

  // Fetch products from Sanity that match the search query
  const products = await searchProductsByName(query);

  // If no products are found, show a message to the user
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No products found for &quot;{query}&quot;
          </h1>
          <p className="text-gray-600 text-center">
            Try searching for something else or check back later.
          </p>
        </div>
      </div>
    );
  }

  // If products are found, display them using the ProductGrid component
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search Results for {query}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
export default SearchPage;


