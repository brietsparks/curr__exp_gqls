const axios = require('axios');
const deserializer = require('jsonapi-util');

const { skillServiceUrl } = require('../config');

const getSkillsByIds = async ({ ids = [] }) => {
  return ids.map(id => ({
    id,
    canonical_name: 'placeholder_value'
  }));

  const filter = JSON.stringify({
    name: 'id',
    val: ids,
    op: 'in_'
  });

  const endpoint = `${skillServiceUrl}/skill?filter[${filter}]`;

  const res = await axios.get(endpoint);

  return deserializer.parse(res.data).data;
};

module.exports = {
  getSkillsByIds
};