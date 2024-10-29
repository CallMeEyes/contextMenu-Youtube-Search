var buttonYTSearch = {
    "id": "buttonYTSearch",
    "title": "Search for %s on Youtube", 
    "contexts": ["all"], 
};
chrome.contextMenus.create(buttonYTSearch);

var buttonOpenYTMusic = {
    "id": "buttonOpenYTMusic",
    "title": "Open this YT video as music",
    "contexts": ["all"],
};
chrome.contextMenus.create(buttonOpenYTMusic);

var buttonWikiSearch = {
    "id": "buttonWikiSearch",
    "title": "Search for %s on Wikipedia",
    "contexts": ["all"],
};
chrome.contextMenus.create(buttonWikiSearch);



chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "buttonYTSearch") {
        let newURL = ("https://www.youtube.com/results?search_query=" + (info.selectionText));
        chrome.tabs.create({ url: newURL });
    }
    if (info.menuItemId == "buttonOpenYTMusic") {
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
    if (info.menuItemId == "buttonWikiSearch") {
        let newURL = ("https://en.wikipedia.org/w/index.php?search=" + (info.selectionText) + "&title=Special%3ASearch&ns0=1");
        chrome.tabs.create({ url: newURL });
    }
});


