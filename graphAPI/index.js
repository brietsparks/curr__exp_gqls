const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const graphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { graphQLSchema };
