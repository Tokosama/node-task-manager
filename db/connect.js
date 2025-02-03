const mongoose = require("mongoose");
const connectionString =process.env.MONGOURI

mongoose
  .connect(connectionString)
  .then(() => console.log("connected"))
  .catch((err) => console.log("not working"));
