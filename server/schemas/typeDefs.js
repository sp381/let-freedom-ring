// import the sql tagged template function
const { gql } = require("apollo-server-express");

//  create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    reactions(username: String): [Reaction]
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth
    # should we addReaction?
  }
`;

module.exports = typeDefs;
