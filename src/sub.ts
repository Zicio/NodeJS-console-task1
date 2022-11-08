#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    year: { type: "number", alias: "y", default: 0 },
    month: { type: "number", alias: "m", default: 0 },
    date: { type: "number", alias: "d", default: 0 },
  })
  .parseSync();

const date = new Date();

if (argv.year) {
  date.setFullYear(date.getFullYear() - argv.year);
} else if (argv.month) {
  date.setMonth(date.getMonth() - argv.month);
} else if (argv.date) {
  date.setDate(date.getDate() - argv.date);
}

console.log(date.toISOString());
