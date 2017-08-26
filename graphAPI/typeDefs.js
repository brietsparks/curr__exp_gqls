const typeDefs = `
  type Query {
    history(user_id: String!): [Project] 
  }
  
  type Project {
    id: Int!
    user_id: String!
    parent_id: Int
    title: String
    contributions: [Contribution]
  }
  
  type Contribution {
    id: Int!
    parent_id: Int
    short_summary: String
    skills: [Skill]
    samples: [Sample]
  }
  
  type Sample {
    id: Int!
    contribution_id: Int
    value: String
  }
  
  type Skill {
    id: Int!
    contribution_id: Int
    canonical_name: String 
  }
`;

module.exports = { typeDefs };
