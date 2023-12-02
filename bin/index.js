#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const log = console.log;
const bootstrap = () => {
    const program = new commander_1.Command();
    program
        .version("0.1.0")
        .description("Just-gomin's Blog Thumbnail Generator")
        .option("-c, --category <category>", "Set the category of Content.")
        .option("-t, --title <title>", "Set the title of Content.")
        .option("-s, --size <size>", "Set the size of Thumbnail Image's side length.(Unit is 'px')");
    const options = program.opts();
    let category = "";
    let title = "";
    let isErr = false;
    let errMsg = "You must enter the ";
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
    if (isErr)
        log(errMsg);
    else {
    }
};
bootstrap();
