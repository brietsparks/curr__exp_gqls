const { getProjectsByUserId } = require('../connectors/projectConnector');
const { getContributionsByParentId } = require('../connectors/contributionConnector');
const { getSamplesByContributionId } = require('../connectors/sampleConnector');
const { getUtilizationsByContributionId } = require('../connectors/utilizationConnector');
const { getSkillsByIds } = require('../connectors/skillConnector');
const { isResourceCollection } = require('../connectors/util');

const resolvers = {
  Query: {
    history: (root, { user_id }, ctx) => {
      return getProjectsByUserId({ user_id })
    }
  },

  Project: {
    contributions: async project => isResourceCollection(project.contributions)
      ? project.contributions
      : await getContributionsByParentId({ parent_id: project.id })
  },

  Contribution: {
    skills: async contribution => {
      const utilizations = await resolveUtilizations(contribution);
      const skillIds = utilizations.map(utilization => utilization.skill_id);
      return getSkillsByIds({ ids: skillIds });
    },

    samples: async contribution => isResourceCollection(contribution.samples)
      ? contribution.samples
      : await getSamplesByContributionId({ contribution_id: contribution.id })
  },

  Sample: {
  },

  Skill: {
  }
};

module.exports = {
  resolvers
};

const resolveUtilizations = async contribution => isResourceCollection(contribution.utilizations)
    ? contribution.utilizations
    : await getUtilizationsByContributionId({ contribution_id: contribution.id });