var contextMenuItem = {
    "id": "iconid",
    "title": "Search for %s on Youtube", 
    "contexts": ["all"], 
};
chrome.contextMenus.create(contextMenuItem);

var contextMenuItemTWo = {
    "id": "iconid2",
    "title": "Open this YT video as music",
    "contexts": ["all"],
};
chrome.contextMenus.create(contextMenuItemTWo);



chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "iconid") {
        let newURL = ("https://www.youtube.com/results?search_query=" + (info.selectionText));
        chrome.tabs.create({ url: newURL });
    }
    if (info.menuItemId == "iconid2") {
        let scondurl = "hello";
        chrome.tabs.query({'active': true, lastFocusedWindow: true}, tabs => {
            scondurl = tabs[0].url;
            console.log(scondurl);
            const regex = /www/i;
            chrome.tabs.create({ url: scondurl.replace(regex, "music")})  ;
        }
        );

    }
});


