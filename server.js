const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { graphqlEndpointPath, port } = require('./config');
const { graphQLSchema } = require('./graphAPI');

const server = express();
server.use(morgan());
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());

server.use(
  graphqlEndpointPath,
  bodyParser.json(),
  graphqlExpress({
    schema: graphQLSchema,
  })
);

server.use('/graphiql', graphiqlExpress({
  endpointURL: graphqlEndpointPath,
}));

server.listen(port, (err) => {
  if (err) throw err;
  console.log('> Ready');
});
