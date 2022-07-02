const { Reaction } = require("../models");

const resolvers = {
  Query: {
    reactions: async () => {
      return Reaction.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
