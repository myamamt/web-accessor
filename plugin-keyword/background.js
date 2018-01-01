var keywordIndex = 0;

//次のURLを取得する
var getNextURL = function() {
  if (keywordIndex < keywords.length) {
    return 'https://www.google.com/search?btnI=&q=' + keywords[keywordIndex++];
  }
  return null;
};

var createTab = function() {
  var url = getNextURL();
  if (url == null) return;

  chrome.tabs.create({url: url});

  setTimeout(createTab, 5000);
};
