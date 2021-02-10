#!/usr/bin/env node

const commander = require("commander");
const { getUsers } = require("./module/getUsers");
const { createUser } = require("./module/createUser");

async function toDo() {
  await createUser();
  await getUsers();
}

commander.version("1.0.1").description("Configuration files creator.");

commander
  .command("defaultCommand", { isDefault: true })
  .alias("d")
  .description("defaultCommand")
  .action(() => {
    toDo();
  });

commander.parse(process.argv);
