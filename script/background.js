var geekSignInDate = null;
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.url.indexOf("miui.com") !== -1) {
        sendResponse(miuiTask());
    } else if (request.url.indexOf("account.xiaomi.com") !== -1) {
        sendResponse(xiaoMiLogin());
    }
    var b = true;
});

function miuiTask() {
    return { type: 0 };
}

function xiaoMiLogin() {
    return { type: 2, username: '349419245', password: 'wfy12345678...' };
}

setInterval(function () {
    var date = new Date();
    if (geekSignInDate != date.getDate() && date.getHours() > 6) {
        geekSignInDate = date.getDate();
        tabCreate({ url: 'http://www.miui.com/home.php?mod=task&do=apply&id=21' }, function (tab) {
            tabUpdate(tab.id, { url: 'http://geek.miui.com/index.php?m=member&c=index&a=logout' }, function (tab) {
                tabUpdate(tab.id, { url: 'https://account.xiaomi.com/pass/serviceLogin?callback=http%3A%2F%2Fwww.miui.com%2Fextra.php%3Fmod%3Dxiaomi%2Fauthcallback%26comefrom%3Dgeek%26followup%3Dhttp%253A%252F%252Fgeek.miui.com%252F%26sign%3DYWM5NTNjMjQyYTkyOWFmZDc2Y2M5ZDQwNWQ3ZjA3MjE3ZDM1NzQzNQ%2C%2C&sid=miuibbs&_locale=zh_CN' }, function (tab) {
                    executeScript(tab.id, { file: '/script/contentscriptgeek.js' }, function () {
                        tabUpdate(tab.id, { url: 'http://www.miui.com/home.php?mod=task&do=draw&id=21' }, function (tab) {
                            chrome.tabs.remove(tab.id, function () {

                            })
                        });
                    });
                });
            });
        });
    }
}, 1000 * 60 * 10);

function tabCreate(option, callback) {
    chrome.tabs.create(option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 5 * 1000);
    });
};

function tabUpdate(tabId, option, callback) {
    chrome.tabs.update(tabId, option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 5 * 1000);
    });
};

function executeScript(tabId, option, callback) {
    chrome.tabs.executeScript(tabId, option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 5 * 1000);
    });
};
//home.php?mod=task&do=draw&id=21
///http://www.miui.com/home.php?mod=task&do=apply&id=21
//1 reload, 2 click

// {
//     actionType:1,
//     startTime: 0,
//     endTime:1,
//     repeat: 1*60*1000,
//     pageName: 'test'
// }

// {
//     actionType:2,
//     startTime: 0,
//     endTime:1,
//     repeat: 1*60*1000,
//     pageName: 'test',
//     element:'#test'
// }

/*
type:
    0  -----> other task
    1  -----> geek sign in
    2  -----> xiaomi login

*/


