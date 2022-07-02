const { Reaction } = require("../models");

const resolvers = {
  Query: {
    reactions: async () => {
      return Reaction.find().sort({ createdAt: -1 });
    },
    // Mutation: {
    //   addUser: async (parent, args) => {
    //     const user = await user.create(args);

    //     return user;
    //   },
    //   login: async () => {},
    // },
  },
};

module.exports = resolvers;
