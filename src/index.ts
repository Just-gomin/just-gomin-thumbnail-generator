#!/usr/bin/env node
// => Unix-like platform들에서 실행 환경을 알려준다.
// 참고: https://stackoverflow.com/a/33510581

import { Command } from "commander";

const log = console.log;

const bootstrap = () => {
  const program = new Command();

  program
    .version("0.1.0")
    .description("Just-gomin's Blog Thumbnail Generator")
    .option("-c, --category <category>", "Set the category of Content.")
    .option("-t, --title <title>", "Set the title of Content.")
    .option(
      "-s, --size <size>",
      "Set the size of Thumbnail Image's side length.(Unit is 'px')"
    );

  const options = program.opts();

  let category: string = "";
  let title: string = "";

  let isErr: boolean = false;
  let errMsg: string = "You must enter the ";

  log(process.argv.length);

  if (!options.category || !options.title) {
    isErr = true;
    const categoryKey = "'Category'";
    const titleKey = "'Title'";

    errMsg +=
      !options.category && !options.title
        ? `${categoryKey} & ${titleKey}`
        : !options.category
        ? categoryKey
        : titleKey;

    errMsg += " of your content.";
  }

  if (isErr) log(errMsg);
  else {
  }
};

bootstrap();
