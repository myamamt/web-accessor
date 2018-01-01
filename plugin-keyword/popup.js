document.getElementById('btn').addEventListener('click', function(){
  chrome.extension.getBackgroundPage().createTab();
});
