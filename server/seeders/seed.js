const db = require("../config/connection");
const { Contest } = require("../models");
const contestSeeds = require("./contestSeeds.json");

db.once("open", async () => {
  await Contest.deleteMany({});
  await Contest.create(contestSeeds);

  console.log("all done!");
  process.exit(0);
});
