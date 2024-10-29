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

var contextMenuItemThree = {
    "id": "iconid3",
    "title": "Search for %s on Wikipedia",
    "contexts": ["all"],
};
chrome.contextMenus.create(contextMenuItemThree);



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
            console.log("Opening new Tab!");
            chrome.tabs.create({ url: scondurl.replace(regex, "music")})  ;
        }
        );

    }
    if (info.menuItemId == "iconid3") {
        let newURL = ("https://en.wikipedia.org/w/index.php?search=" + (info.selectionText) + "&title=Special%3ASearch&ns0=1");
        chrome.tabs.create({ url: newURL });
    }
});


