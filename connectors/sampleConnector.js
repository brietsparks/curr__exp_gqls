const axios = require('axios');
const deserializer = require('jsonapi-util');

const { historyServiceUrl } = require('../config');

const getSamplesByContributionId = async ({ contribution_id }) => {
  const filter = JSON.stringify({
    name: 'contribution_id',
    val: contribution_id,
    op: 'eq'
  });

  const endpoint = `${historyServiceUrl}/samples?filter[${filter}]`;

  const res = await axios.get(endpoint);

  return deserializer.parse(res.data).data;
};

module.exports = {
  getSamplesByContributionId
};