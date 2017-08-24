const axios = require('axios');

const { historyServiceUrl } = require('../config');
const { deserializer } = require('./deserializer');

const getProjectsByUserId = async ({ userId }) => {
  const filter = JSON.stringify({
    name: 'user_id',
    val: userId,
    op: 'eq'
  });

  const result = await axios.get(
    `${historyServiceUrl}/projects?filter[${filter}]`
  );

  const deserialized = await deserializer.deserialize(result.data);

  return deserialized;
};

module.exports = {
  getProjectsByUserId
};