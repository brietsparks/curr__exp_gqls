const request = require('request');
const { find, filter, includes } = require('lodash');

const { mockProjects, mockContributions, mockSkills } = require('./data');

const { getProjectsByUserId } = require('../services/projectService');

const resolvers = {
  Query: {
    history: (root, { userId }) => getProjectsByUserId({ userId })
  },

  Project: {
    contributions: project => filter(mockContributions, c => c.parentId === project.id)
  },

  Contribution: {
    skills: contribution => filter(mockSkills, s => includes(contribution.skillIds, s.id))
  }
};

module.exports = {
  resolvers
};