var geekSignInDate = null;
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.url.indexOf("miui.com") !== -1) {
        sendResponse(miuiTask());
    } else if (request.url.indexOf("account.xiaomi.com") !== -1) {
        sendResponse(xiaoMiLogin());
    }
});

function miuiTask() {
    var date = new Date();
    if (geekSignInDate != date.getDate()) {
        geekSignInDate = date.getDate();
        return { type: 1, applyUrl: 'http://www.miui.com/home.php?mod=task&do=draw&id=21' };
    } else {
        return { type: 0 };
    }
}

function xiaoMiLogin() {
    return { type: 2, username: '349419245', password: 'wfy12345678...' };
}
//home.php?mod=task&do=draw&id=21
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


