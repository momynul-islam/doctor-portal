const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to the database.");
    app.listen(port, () => {
      console.log(`Doctor-Portal server listening at port ${port}...`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
