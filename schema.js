const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} = require('graphql')

let count = 1
let year = 2000

const query = new GraphQLObjectType({ // resolver
  name: 'RootQueryType',
  fields: {
    count: {
      type: GraphQLInt,
      resolve: function () { return count }
    },
    name: {
      type: GraphQLString,
      resolve: function () { return 'alex' }
    },
    year: {
      type: GraphQLInt,
      resolve: function () { return year }
    },
    district: {
      type: GraphQLString,
      resolve: function () { return 'Wakiso' }
    }
  }
})
const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: 'Updates the count',
      resolve: function () { return ++count }
    },
    updateName: {
      type: GraphQLString,
      resolve: function () { return 'second name : Ssentongo' }
    },
    updateYear: {
      type: GraphQLInt,
      resolve: function () { return year + 1 }
    },
    updateDistrict: {
      type: GraphQLString,
      resolve: function () { return 'Mbale' }
    }
  }
})

const Schema = new GraphQLSchema({
  query, mutation
})

module.exports = Schema
