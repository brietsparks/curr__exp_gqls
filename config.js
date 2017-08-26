const host = 'http://localhost';
const port = 3001;
const appUrl = `${host}:${port}`;
const graphqlEndpointPath = '/graphql';
const graphqlUrl = appUrl + graphqlEndpointPath;

const historyServiceUrl = 'http://localhost:5000';
const skillServiceUrl = '';

module.exports = {
  host,
  port,
  appUrl,
  graphqlEndpointPath,
  graphqlUrl,

  historyServiceUrl,
  skillServiceUrl
};