const Deserializer = require('jsonapi-serializer').Deserializer;

exports.deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});