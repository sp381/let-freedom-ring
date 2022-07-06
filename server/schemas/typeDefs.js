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
  type Comment {
    _id: ID
    commentnBody: String
    createdAt: String
  }
  type Query {
    users: [User]
    user(username: String): User
    reactions(username: String): [Reaction]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
