var wordCount = function(message) {
  var stringSplit = message.split(" ");
  var wordResults = {};
  // return stringSplit;
  stringSplit.forEach(function(word) {
    if (!(word in wordResults)) {
      var wordCounter = 0;
      wordCounter += 1
      wordResults[word] = wordCounter
    } else {
      var wordCounter = wordResults[word]
      wordCounter += 1
      wordResults[word] = wordCounter
    }
  });
  return wordResults
}

$(function() {
  $("form#wordcount").submit(function(event) {
    var message = $('input#message').val();
    var results = wordCount(message);
    results.forEach(function(result) {
      $("span#results").text("hello");
    })

    event.preventDefault();
  });
});
