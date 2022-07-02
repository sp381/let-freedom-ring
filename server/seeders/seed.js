const fakers = require("fakers");

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = fakers.internet.userName();
    const email = fakers.internet.email(username);
    const password = fakers.internet.password();

    userData.push({ username, email, password });
  }
  
  // create reactions ??

  console.log("all done!");
  process.exit(0);
});
