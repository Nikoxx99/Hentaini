import {resolvers} from './resolvers'
import { join } from 'path'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

// eslint-disable-next-line no-undef
const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
})

export default addResolversToSchema({
  schema,
  resolvers,
})
