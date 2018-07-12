QUnit.test( "H1 elements should be parsed", function (assert ) {
  var header = "# Header 1";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H1 element should be parsed in the given regular expression." );
});

QUnit.test( "H2 elements should be parsed", function (assert ) {
  var header = "## Header 2";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H2 element should be parsed in the given regular expression." );
});

QUnit.test( "H3 elements should be parsed", function (assert ) {
  var header = "### Header 3";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H3 element should be parsed in the given regular expression." );
});

QUnit.test( "H4 elements should be parsed", function (assert ) {
  var header = "#### Header 4";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H4 element should be parsed in the given regular expression." );
});

QUnit.test( "H5 elements should be parsed", function (assert ) {
  var header = "##### Header 5";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H5 element should be parsed in the given regular expression." );
});

QUnit.test( "H6 elements should be parsed", function (assert ) {
  var header = "###### Header 6";
  var regEx = /^[\s]*#{1,6}/
  assert.ok( regEx.test(header), "The H6 element should be parsed in the given regular expression." );
});

QUnit.test( "Ordered list items with one digit should be parsed", function (assert ) {
  var orderedListItem = "1. First list item";
  var regEx = /^[\s]*\d+\.[\s]*/
  assert.ok( regEx.test(orderedListItem), "The ordered list item should be parsed in the given regular expression." );
});

QUnit.test( "Ordered list items with two digits should be parsed", function (assert ) {
  var orderedListItem = "10. Tenth list item";
  var regEx = /^[\s]*\d+\.[\s]*/
  assert.ok( regEx.test(orderedListItem), "The ordered list item should be parsed in the given regular expression." );
});

QUnit.test( "Code blocks should not be parsed because the whole code block should match the regular expression", function (assert ) {
  var codeBlock = "```\nthis.code = code;\n```";
  //var regEx = /```([\s\S](?!```))*\s*```/
  var regEx = /```[^`]+```/;
  assert.ok( regEx.test(codeBlock), "The entire code block should match the given regular expression." );
});

QUnit.test( "Title metadata should be parsed", function (assert ) {
  var metadata = "title: Title!!!";
  var regEx = /^title:\s+/;
  assert.ok( regEx.test(metadata), "The title should be parsed in the given regular expression." );
});

QUnit.test( "Description metadata should be parsed", function (assert ) {
  var metadata = "_description: Description!!!";
  var regEx = /^_description:\s+/;
  assert.ok( regEx.test(metadata), "The description should be parsed in the given regular expression." );
});

QUnit.test( "Keywords metadata should be parsed", function (assert ) {
  var metadata = "_keywords: Keyword1, Keyword2, Keyword3";
  var regEx = /^_keywords:\s+/;
  assert.ok( regEx.test(metadata), "The keywords should be parsed in the given regular expression." );
});

QUnit.test( "The first paragraph should be parsed", function (assert ) {
  var firstParagraph = '<p class="highlight">This paragraph is supposed to be important.</p>';
  var regEx = /<p class="highlight">[^<]*<\/p>/;
  assert.ok( regEx.test(firstParagraph), "The first paragraph should be parsed in the given regular expression." );
});

QUnit.test( "Unordered star list items should be parsed", function (assert ) {
  var unorderedListItem = "* List item!";
  var regEx = /^[\s]*\*\s+/;
  assert.ok( regEx.test(unorderedListItem), "The star unordered list item should be parsed in the given regular expression." );
});

QUnit.test( "Unordered dash list items should be parsed", function (assert ) {
  var unorderedListItem = "- List item!";
  var regEx = /^[\s]*\-\s+/;
  assert.ok( regEx.test(unorderedListItem), "The dash unordered list item should be parsed in the given regular expression." );
});

QUnit.test( "Notes or quoted text should be parsed", function (assert ) {
  var noteText = "> Note or quoted text!";
  var regEx = /^[\s]*>\s+(?!\[)/;
  assert.ok( regEx.test(noteText), "The note or quoted text should be parsed in the given regular expression." );
});

QUnit.test( "Regular paragraph text should be parsed", function (assert ) {
  var regularText = "Regular paragraph text!";
  var regEx = /^\s*(?=[A-Za-z]|\*\*|\|)(?!title)/;
  assert.ok( regEx.test(regularText), "The note or quoted text should be parsed in the given regular expression." );
});

QUnit.test( "Links without any special characters should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google.com)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link without any special characters should be parsed in the given regular expression." );
});

QUnit.test( "Links with a # sign should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google.com#anchor)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with a # sign should be parsed in the given regular expression." );
});

QUnit.test( "Links with a # sign and an _ should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google.com#internal_anchor)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with a # sign and an _ should be parsed in the given regular expression." );
});

QUnit.test( "Links with numbers should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google999.com)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with numbers should be parsed in the given regular expression." );
});

QUnit.test( "Links with a / should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google.com/answer)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with a / should be parsed in the given regular expression." );
});

QUnit.test( "Links with a : should be parsed", function (assert ) {
  var link = "[Local URL](http://localhost:8080)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with a : should be parsed in the given regular expression." );
});

QUnit.test( "Links with a - should be parsed", function (assert ) {
  var link = "[Please Google it](http://www.google-it.com)";
  var regEx = /(?<=^|\s|\()\[(?!\()[^\]]+\]\([a-zA-Z0-9:\/\-\.#_]+\)/;
  assert.ok( regEx.test(link), "The link with a - should be parsed in the given regular expression." );
});

QUnit.test( "Bold text should be parsed", function (assert ) {
  var boldText = "**Bold**";
  var regEx = /\*+/;
  assert.ok( regEx.test(boldText), "The bold text should be parsed in the given regular expression." );
});

QUnit.test( "Italic text with a * should be parsed", function (assert ) {
  var boldText = "*Italic*";
  var regEx = /\*+/;
  assert.ok( regEx.test(boldText), "The italic text with a * should be parsed in the given regular expression." );
});

QUnit.test( "Italic text with an _ should be parsed", function (assert ) {
  var boldText = "_Italic_";
  var regEx = /_/;
  assert.ok( regEx.test(boldText), "The italic text with an _ should be parsed in the given regular expression." );
});

QUnit.test( "Images without tooltip text should be parsed", function (assert ) {
  var image = "![](imageUrl.png)";
  var regEx = /!\[[^\]]*\]\([^)]+\)/;
  assert.ok( regEx.test(image), "The image should be parsed in the given regular expression." );
});

QUnit.test( "Images with tooltip text should be parsed", function (assert ) {
  var image = "![Tooltip text](imageUrl.png)";
  var regEx = /!\[[^\]]*\]\([^)]+\)/;
  assert.ok( regEx.test(image), "The image should be parsed in the given regular expression." );
});

QUnit.test( "Backticks should be parsed", function (assert ) {
  var codeText = "`Code words`";
  var regEx = /`/;
  assert.ok( regEx.test(codeText), "The backticks should be parsed in the given regular expression." );
});

QUnit.test( "Table delimiters should be parsed", function (assert ) {
  var tableRow = "| Header 1 | Header 2 |";
  var regEx = /(?<!\\)\|/;
  assert.ok( regEx.test(tableRow), "The table delimiters should be parsed in the given regular expression." );
});

QUnit.test( "The table row that separates the headers from the content should be parsed", function (assert ) {
  var tableRow = "| ---- | :--- | ---: | :---: |";
  var regEx = /:?\-+\-+:?\s*(?=\|)/;
  assert.ok( regEx.test(tableRow), "The table delimiters should be parsed in the given regular expression." );
});

