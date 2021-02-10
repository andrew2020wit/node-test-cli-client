#!/usr/bin/env node

const commander = require("commander");
const { getUsers } = require("./module/GetUsersEndPoint");

commander.version("1.0.1").description("Configuration files creator.");

commander
  .command("defaultCommand", { isDefault: true })
  .alias("d")
  .description("defaultCommand")
  .action(() => {
    getUsers();
  });

commander.parse(process.argv);
