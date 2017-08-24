const mockProjects = [
  {
    id: 1,
    userId: '1',
    parentId: null,
    title: 'Foo'
  },
  {
    id: 2,
    userId: '1',
    parentId: 1,
    title: 'Bar',
  },
  {
    id: 3,
    userId: '2',
    parentId: null,
    title: ''
  }
];

const mockContributions = [
  {
    id: 1,
    parentId: 1,
    shortSummary: 'Baz',
    skillIds: [2, 3]
  }
];

const mockSkills = [
  {
    id: 1,
    canonicalName: 'PHP'
  },
  {
    id: 2,
    canonicalName: 'JavaScript'
  },
  {
    id: 3,
    canonicalName: 'Python'
  }
];

module.exports = {
  mockProjects,
  mockContributions,
  mockSkills
};