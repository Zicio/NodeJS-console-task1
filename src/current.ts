#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    year: { type: "number", alias: "y", default: null },
    month: { type: "number", alias: "m", default: null },
    date: { type: "number", alias: "d", default: null },
  })
  .parseSync();

const date = new Date();

if (argv.year === 0) {
  console.log(date.getFullYear());
} else if (argv.month === 0) {
  console.log(date.getMonth());
} else if (argv.date === 0) {
  console.log(date.getDate());
} else {
  console.log(date.toISOString());
}
