// const resolvers = {
//   Query: {
//     helloWorld: () => {
//       return "Hello world";
//     },
//   },
// };

const { Contest } = require("../models");

// module.exports = resolvers;

const resolvers = {
  Query: {
    contests: async () => {
      return Contest.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
