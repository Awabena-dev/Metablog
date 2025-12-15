// schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './Blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
