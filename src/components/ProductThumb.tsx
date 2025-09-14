import Link from "next/link";
import { Product } from "../../sanity.types"
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";


// Displays a single product thumbnail with image, name, description, and out-of-stock overlay
function ProductThumb({ product }: { product: Product }) {
    const isOutOfStock = product.stock !== undefined && product.stock !== null
    && product.stock <=0;
    return (
        <Link
        href={`/product/${product.slug?.current}`}
        className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
        >
            {/* Render the real product content here */}
            <div className="relative aspect-square w-80 h-60 overflow-hidden">
                {product.image && (
                    <Image className="object-contain transition-transform duration-300 
                    group-hover:scale-105"
                    src={imageUrl(product.image).url()}
                    alt={product.name || "Product Image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw 33vw"
                     />
                )}
            {isOutOfStock && (
                <div className="absolute inset-0 flex items-center justify-center 
                bg-black bg-opacity-50"
                >
                    <span className="text-white font-bold text-lg">Out of Stock</span>
                </div>
            )}
            </div>
            <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
            {product.description 
                ?.map((block) =>
                block._type === "block"
                ? block.children?.map((child) => child.text).join(" ")
                : ""
            )
            .join(" ") || "No description available."}
            </p>
            </div>
        </Link>
    )
}

export default ProductThumb;