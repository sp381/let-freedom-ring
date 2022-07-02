// import the sql tagged template function
const { gql } = require("apollo-server-express");

//  create our typeDefs
const typeDefs = gql`
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
  }
  type Query {
    reactions(username: String): [Reaction]
  }
`;

module.exports = typeDefs;
