const chalk = require("chalk");
const axios = require("axios").default;

const GetUsersEndPoint = "http://localhost:3000/user/show";

function getUsers() {
  console.log(chalk.bgMagenta("function getUsers() started"));
  axios
    .get(GetUsersEndPoint)
    .then(function (response) {
      // handle success
      console.log("response: ", response.data);
    })
    .catch(function (error) {
      // handle error
      console.log("error:", error);
    });
}

module.exports.getUsers = getUsers;
