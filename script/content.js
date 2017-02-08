window.onload = function () {
    printLog();
    chrome.extension.sendRequest({ url: location.host }, function (data) {
        if (data.type == 1) {
            taskGeekSignIn(data);
        } else if (data.type === 2) {
            xiaoMiLogin(data);
        }
        else {
            taskSignIn(data);
        }
    });
};

function printLog() {
    var date = new Date();
    console.log("leo:" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function xiaoMiLogin(data) {
    document.querySelector("#username").value = data.username;
    document.querySelector("#pwd").value = data.password;
    document.querySelector("#login-button").click();
}

function taskGeekSignIn(data) {
    window.open(data.applyUrl);
    setTimeout(function () {
        window.open("http://geek.miui.com/index.php?m=member&c=index&a=logout");

        setTimeout(function () {
            window.open("https://account.xiaomi.com/pass/serviceLogin?callback=http%3A%2F%2Fwww.miui.com%2Fextra.php%3Fmod%3Dxiaomi%2Fauthcallback%26comefrom%3Dgeek%26followup%3Dhttp%253A%252F%252Fgeek.miui.com%252F%26sign%3DYWM5NTNjMjQyYTkyOWFmZDc2Y2M5ZDQwNWQ3ZjA3MjE3ZDM1NzQzNQ%2C%2C&sid=miuibbs&_locale=zh_CN");
        }, 5 * 1000);
    }, 10 * 1000);
}

function taskSignIn() {
    setTimeout(function () {
        var element = document.querySelector("#sign_area .pf_sign_link.link_no_cursor");
        if (element) {
            element.click();
        }

        var number = Math.floor(Math.random() * 10);
        switch (number) {
            case 1:
                location.href = "http://www.miui.com/forum.php";
                break;
            case 2:
                location.href = "http://www.miui.com/forum.php?forumlist=1";
                break;
            case 3:
                location.href = "http://www.miui.com/gid-19.html";
                break;
            case 4:
                location.href = "http://www.miui.com/gid-20.html";
                break;
            case 5:
                location.href = "http://www.miui.com/gid-14.html";
                break;
            case 6:
                location.href = "http://www.miui.com/group.php";
                break;
            case 7:
                location.href = "http://geek.miui.com";
                break;
            case 8:
                location.href = "http://www.miui.com/download.html";
                break;
            case 9:
                location.href = "http://www.miui.com/fridaylist.html";
                break;
            default:
                location.href = "http://www.miui.com/index.html";
                break;
        }
    }, 1 * 1000 * 60);
}