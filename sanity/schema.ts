import { type SchemaTypeDefinition } from 'sanity'
import technologies from './schemas/technologies'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ technologies ],
}
