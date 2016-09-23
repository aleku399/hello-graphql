const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} = require('graphql')

let count = 0

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    count: {
      type: GraphQLInt,
      resolve: () => count
    }
  }
})
const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: 'Updates the count',
      resolve: () => ++count
    }
  }
})

const Schema = new GraphQLSchema({
  query, mutation
})

module.exports = Schema
