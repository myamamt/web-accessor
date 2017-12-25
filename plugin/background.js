var urlIndex = 0;

//次のURLを取得する
var getNextURL = function() {
  if (urlIndex < urlList.length) {
    return 'http://' + urlList[urlIndex++];
  }
  return null;
};

var createTab = function() {
  var url = getNextURL();
  if (url == null) return;

  chrome.tabs.create({url: url});

  setTimeout(createTab, 5000);
};
