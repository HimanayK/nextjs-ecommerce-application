"use client"; // Enables client-side rendering for this component
import { Product } from "../../sanity.types"   // Import the Product type for type safety
import { AnimatePresence, motion } from "framer-motion"  // Import animation utilities from Framer Motion
import ProductThumbnail from "./ProductThumb"   // Import the component that displays individual product details

// ProductGrid component displays a grid of product thumbnails with animation
function ProductGrid({ products }: {products: Product[] }) {
    return (
      // Responsive grid layout for products
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col3 lg:grid-cols-4 gap-4 mt-4">
        {/* Map through products and render each with animation */}
        {products?.map((product) => {
          return (
            <AnimatePresence key={product._id}>    {/*AnimatePresence enables exit animations when items are removed */}
              {/* motion.div animates the product thumbnail's appearance */}
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex justify-center'
              >
                <ProductThumbnail key={product._id} product={product} />    {/* Render the product thumbnail */}
              </motion.div>
            </AnimatePresence>
          ) 
        })}
      </div>
    );
}

export default ProductGrid