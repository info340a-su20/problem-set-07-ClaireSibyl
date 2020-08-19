'use strict';

import readline from 'readline-sync';

import * as Model from './Model';
import {printTweets} from './View';

export function runSearch() {

    console.log("Here are some tweets by @UW_iSchool");
    printTweets(Model.getRecentTweets());

    let response = readline.question("Search tweets, or EXIT to quit:");

    if (response != "EXIT") {

        printTweets(Model.searchTweets(response));

    }

}