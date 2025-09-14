import {client} from "@/sanity/lib/client";     // Import the configured Sanity client
import imageUrlBuilder from "@sanity/image-url";    // Import the image URL builder utility from Sanity
import { SanityImageSource } from "@sanity/image-url/lib/types/types";   // Import the type for Sanity image sources

const builder = imageUrlBuilder(client);  // Create an image URL builder instance using the Sanity client

// Helper function to generate a valid image URL from a Sanity image source object
export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}




//This file provides a helper function imageUrl that generates a valid image URL from a Sanity image source object.
// It uses the Sanity client and the @sanity/image-url package to build URLs for images stored in your Sanity CMS,
// making it easy to display those images in your app.



