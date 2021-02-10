const chalk = require("chalk");
const axios = require("axios").default;

const endPoint = "http://localhost:3000/user/create";

async function createUser() {
  console.log(chalk.bgMagenta("function createUser() started"));
  axios
    .post(endPoint, { name: "Bob3", age: 34 })
    .then(function (response) {
      // handle success
      console.log("response: ", response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(chalk.bgRed("error:"), error);
    });
}

module.exports.createUser = createUser;
