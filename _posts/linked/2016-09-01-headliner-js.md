---
title: Headliner.js
date: 2016-09-01 12:37
link: https://gist.github.com/kqdreger/1f645df129453796e7b4fd30fe5cdd22
---
I find headlines with orphaned words ugly, so AF headlines are pre-processed to add a non-breaking space between the last two words. Now instead of this:

> U.S Broadband Speeds Reach New<br>High

I get:

> U.S Broadband Speeds Reach<br>New High

However, not everyone has the ability to alter the way their CMS renders data, so I've written a small JavaScript file to take care of things on the front end. Just put the Headliner.js script at the bottom of your HTML page, and then add the class `.headliner` to any elements that contain headlines. Headliner.js will then loop through all those headlines and add a non-breaking space between the last two words.

One huge nitpick: This script post-processes your HTML, so headlines may visibly, albeit very quickly, change after the page loads. The processing is fast, so you may not see it happen, but the very fact it's there may bug some folks, including myself. For that reason, I will, ironically, not be using Headliner.js; however, I hope someone is able to make good use of it.
