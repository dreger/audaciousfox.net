/*
  Headliner.js
  By K.Q. Dreger

  Purpose:
  To prevent orphaned words in headlines by inserting a single `&nbsp;`
  in-between the last two words.

  To Use:
  Apply the class `.headliner` to the elements that contain your headline.

  Changes:
  - 9/1/2016: Original release.
*/

(function() {
  var titles = document.getElementsByClassName("headliner");
  for(var i = 0; i < titles.length; i++) {
    var headline = titles[i];
    var words = headline.textContent.split(" ");
    if (words.length > 1) {
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
