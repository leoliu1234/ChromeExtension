var geekSignInDate = null;
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.url.indexOf("miui.com") !== -1) {
        sendResponse(miuiTask());
    } else {
        sendResponse(reload());
    }
});

function miuiTask() {
    return { type: 1 };
}

function reload() {
    return { type: 3 };
}

setInterval(function () {
    var date = new Date();
    if (geekSignInDate != date.getDate() && date.getHours() > 6) {
        tabCreate({ url: 'http://www.miui.com/home.php?mod=task&do=apply&id=21' }, function (tab) {
            tabUpdate(tab.id, { url: 'http://geek.miui.com/index.php?m=member&c=index&a=logout' }, function (tab) {
                tabUpdate(tab.id, { url: 'https://account.xiaomi.com/pass/serviceLogin?callback=http%3A%2F%2Fwww.miui.com%2Fextra.php%3Fmod%3Dxiaomi%2Fauthcallback%26comefrom%3Dgeek%26followup%3Dhttp%253A%252F%252Fgeek.miui.com%252F%26sign%3DYWM5NTNjMjQyYTkyOWFmZDc2Y2M5ZDQwNWQ3ZjA3MjE3ZDM1NzQzNQ%2C%2C&sid=miuibbs&_locale=zh_CN' }, function (tab) {
                    executeScript(tab.id, { code: 'document.querySelector("#username").value = "349419245";document.querySelector("#pwd").value = "wfy12345678...";document.querySelector("#login-button").click();' }, function () {
                        tabUpdate(tab.id, { url: 'http://www.miui.com/home.php?mod=task&do=draw&id=21' }, function (tab) {
                            chrome.tabs.remove(tab.id, function () {
                                geekSignInDate = date.getDate();
                            })
                        });
                    });
                });
            });
        });
    }
}, 1000 * 60 * 10);

var xiaoMiSignIn;
setInterval(function () {
    var date = new Date();
    if (xiaoMiSignIn != date.getDate() && date.getHours() > 5) {
        singleActionTask("http://www.miui.com/index.html", 'var element = document.querySelector("#sign_area .pf_sign_link.link_no_cursor"); if (element) { element.click(); }', function () {
            xiaoMiSignIn = date.getDate();
        });
    }
}, 1000 * 60 * 10);

var jdTask = [
    { url: 'http://vip.jd.com/', code: "var element = document.querySelector('#checkinBtn'); if(element) { element.click(); }" },
    { url: 'http://vip.jr.jd.com/', code: "var element = document.querySelector('#index-qian-btn');if(element) { element.click(); }" },
    { url: 'http://you.jd.com/', code: "var element = document.querySelector('#sidebar_checkin_btn');if(element) { element.click(); }" }
];
var jd;

setInterval(function () {
    var date = new Date();
    if (jd != date.getDate() && date.getHours() > 5) {
        jd = date.getDate();
        for (var i = 0; i < jdTask.length; i++) {
            singleActionTask(jdTask[i].url, jdTask[i].code);
        }
    }
}, 1000 * 60 * 10);


// Utility
function tabCreate(option, callback) {
    chrome.tabs.create(option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 30 * 1000);
    });
};

function tabUpdate(tabId, option, callback) {
    chrome.tabs.update(tabId, option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 30 * 1000);
    });
};

function executeScript(tabId, option, callback) {
    chrome.tabs.executeScript(tabId, option, function (tab) {
        setTimeout(function () {
            callback(tab);
        }, 30 * 1000);
    });
};

function singleActionTask(url, code, doneCallBack) {
    tabCreate({ url: url }, function (tab) {
        executeScript(tab.id, { code: code }, function () {
            chrome.tabs.remove(tab.id, function () {
                if (typeof doneCallBack === 'function') {
                    doneCallBack();
                }
            });
        });
    });
};

