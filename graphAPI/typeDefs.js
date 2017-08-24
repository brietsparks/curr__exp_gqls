const typeDefs = `
  type Query {
    history(userId: String!): [Project] 
  }
  
  type Project {
    id: Int!
    userId: String!
    parentId: Int
    title: String
    contributions: [Contribution]
  }
  
  type Contribution {
    id: Int!
    parentId: Int
    shortSummary: String
    skills: [Skill]
  }
  
  type Skill {
    id: Int!,
    canonicalName: String 
  }
`;

module.exports = { typeDefs };
