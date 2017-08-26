const axios = require('axios');
const deserializer = require('jsonapi-util');

const { historyServiceUrl } = require('../config');

const getContributionsByParentId = async ({ parent_id }) => {
  const filter = JSON.stringify({
    name: 'parent_id',
    val: parent_id,
    op: 'eq'
  });

  const endpoint = `${historyServiceUrl}/contributions?filter[${filter}]`;

  const res = await axios.get(endpoint);

  return deserializer.parse(res.data).data;
};

module.exports = {
  getContributionsByParentId
};