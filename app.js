#!/usr/bin/env node

const commander = require("commander");
const { defaultFunction } = require("./module/default");

commander.version("1.0.1").description("Configuration files creator.");

commander
  .command("defaultCommand", { isDefault: true })
  .alias("d")
  .description("defaultCommand")
  .action((parameter1) => {
    defaultFunction(parameter1);
  });

commander.parse(process.argv);
