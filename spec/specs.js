describe('wordCount', function() {
  // it('should return true if a word appears in a given string', function() {
  //   expect(wordCount("hey hey jude")).to.eql(["hey", "hey", "jude"]);
  // });

  it("should return the number of times a word appears in the message", function() {
    // var test = "hey hey jude"
    // wordCount(test);
    expect(wordCount("hello hello world hello")).to.eql({"hello": 3, "world": 1});
  });
});
