// import the sql tagged template function
// const { gql } = require("apollo-server-express");

//  create our typeDefs
// const typeDefs = gql`
//   type Query {
//     helloWorld: String
//   }
// `;

// export the typeDefs
// module.exports = typeDefs;

// import the sql tagged template function
const { gql } = require("apollo-server-express");

//  create our typeDefs
const typeDefs = gql`
// type Contest {
//   _id: ID
//   contest.Text: String
//   createdAt: String
//   username: String
//   reactionCount:Int
// }
  type Query {
    contest: [Contest]
  }
`;

// export the typeDefs
module.exports = typeDefs;
