'use strict';

//takes array of tweet objects with timestamp and text
export function printTweets(tweets) {

    if (tweets == undefined || tweets.length == 0) {
        console.log("No tweets found");   
    } else {
        tweets.forEach((tweet) => {

            let convertedDate = new Date(tweet.timestamp).toLocaleString("en-US");

            console.log("- \"" + tweet.text + "\" (" + convertedDate + ")");


        });
    }
}