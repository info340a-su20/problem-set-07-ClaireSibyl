'use strict';

//array of objects: "tweets"
import allTweets from './uw_ischool_tweets';

// 1.
let revisedTweets = allTweets.map((tweet) => {

    let revisedTweet = {};
    revisedTweet.text = tweet.text;
    revisedTweet.timestamp = Date.parse(tweet.created_at);
    return revisedTweet;

});

export function getRecentTweets() {

    //sort allTweets in descending order; meaning more recent first 
    revisedTweets.sort((a, b) => {return b.timestamp - a.timestamp});

    let recentFive = [];

    for (let i = 0; i < 5; i++) {

        recentFive.push(revisedTweets[i]);

    }

    return recentFive;

}

export function searchTweets(query) {

    let results = revisedTweets.filter((tweet) => {
        return tweet.text.toLowerCase().includes(query);
    });

    return results;

}