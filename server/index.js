const express = require("express");
const app = express();

// LDAP integration code goes here

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
