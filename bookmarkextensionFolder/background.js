/* eslint-disable no-undef */
chrome.browserAction.onClicked.addListener(function(activeTab) {
	var newURL = 'http://localhost:9999';
	chrome.tabs.create({ url: newURL });
});
