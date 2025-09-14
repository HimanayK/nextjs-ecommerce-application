import { Product, Category } from "../../sanity.types";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./ui/category-selector";


interface ProductsViewProps{
    products : Product[]; // Assuming Product is a type defined in your Sanity types
    categories: Category[]; // Assuming Category is a type defined in your Sanity types
}

const ProductsView = ({products, categories } : ProductsViewProps) => {
return (
<div className="flex flex-col">
    {/* Render products and categories here */}
    {/* Categories */}
    <div className="w-full sm:w-[200px]">
        <CategorySelectorComponent categories={categories} />
    </div>

    {/* Products */}
    <div className="flex-1">
        <div>
        <ProductGrid products={products} />
            <hr className="w-1/2 sm:w-3/4" />
        </div>
    </div>
 </div>
 );
};

export default ProductsView


