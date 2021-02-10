const chalk = require("chalk");
const axios = require("axios").default;

const GetUsersEndPoint = "http://localhost:3000/user/show";

function defaultFunction() {
  console.log(chalk.bgMagenta("defaultFunction started"));
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

module.exports.defaultFunction = defaultFunction;
