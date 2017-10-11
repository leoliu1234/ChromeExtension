var isblock = true;

function init(patten) {
    chrome.webRequest.onBeforeRequest.addListener(
        function () {
            return {
                cancel: isblock
            };
        }, {
            urls: patten, // Change this to a more specific pattern
            types: ["script"]
        }, ["blocking"]
    );
}

chrome.storage.sync.get({
    patten: ["*://www.googletagmanager.com/*"]
}, function (item) {
    init(item.patten);
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.browserAction.setIcon({
        path: isblock ? "../image/logo-disable.png" : "../image/logo-enable.png"
    });
    isblock = !isblock;
});