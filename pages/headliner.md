---
layout: page
title: Headliner
permalink: /projects/headliner/
---

I find headlines with orphaned words visually unappealing, so here are a few ways to insert a non-breaking space between the last two words of your headlines. 

## Jekyll / Liquid

Put the following code at the top of your `post.html` layout file: 

{% raw %}
    {% capture headliner %}
    {% assign words = page.title | split: ' ' %}
    {% if words.size < 2 %}{{ page.title }}{% else %}{% for word in words %}{% if forloop.last %}&nbsp;{{ word }}{% else %} {{ word }}{% endif %}{% endfor %}{% endif %}{% endcapture %}
{% endraw %}

You can then access the new headline data from the `headliner` variable. 

## JavaScript

Ideally, you'll be able to pre-process your headlines like the above example. However, not everyone has the ability to alter the way their CMS renders data, so I've written a small JavaScript file to take care of things on the front end. Just put this in a script file at the bottom of your page, and then add the class `.headliner` to any elements that contain headlines. 

    (function() {
      var titles = document.getElementsByClassName("headliner");
      for(var i = 0; i < titles.length; i++) {
        var headline = titles[i];
        var words = headline.textContent.split(" ");
        if (words.length > 2) {
          var titleLength = words.length
          var orphaned = words[titleLength-2] + "&nbsp;" + words[titleLength-1]
          words = words.slice(0, titleLength-2)
          words.push(orphaned)
          var newHeadline = words.join(" ")
          headline.innerHTML = newHeadline;
          console.log(newHeadline)
        }
      }
    })();
    
One huge nitpick: This script post-processes your HTML, so headlines may visibly, albeit very quickly, change after the page loads. The processing is fast, so you may not see it happen, but the very fact it's there may bug some folks, including myself. For that reason, I will, ironically, not be using Headliner.js; however, I hope someone is able to make good use of it.
