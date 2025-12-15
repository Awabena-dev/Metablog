import { createClient } from 'next-sanity'
import imageUrlBuilder   from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2025-12-15',
    dataset: "production",
    projectId: "prw0a3y7",
    useCdn: false
}) 


const builder = imageUrlBuilder(client)




export function urlFor(source : string) {
  return builder.image(source)
}