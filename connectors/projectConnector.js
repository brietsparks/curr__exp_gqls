const axios = require('axios');
const deserializer = require('jsonapi-util');

const { historyServiceUrl } = require('../config');

const getProjectsByUserId = async ({ user_id }) => {
  const filter = JSON.stringify({
    name: 'user_id',
    val: user_id,
    op: 'eq'
  });

  const endpoint = `${historyServiceUrl}/projects?filter[${filter}]&include=contributions`;

  const res = await axios.get(endpoint);

  return deserializer.parse(res.data).data;
};

module.exports = {
  getProjectsByUserId
};