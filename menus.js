var contextMenuItem = {
    "id": "iconid",
    "title": "Search for %s on Youtube", 
    "contexts": ["all"], 
};
chrome.contextMenus.create(contextMenuItem);  

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "iconid") {
        let newURL = ("https://www.youtube.com/results?search_query=" + (info.selectionText));
        chrome.tabs.create({ url: newURL });
    }
});
