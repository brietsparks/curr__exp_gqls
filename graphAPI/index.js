const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const graphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(rootResolvers)
});

module.exports = { graphQLSchema };
