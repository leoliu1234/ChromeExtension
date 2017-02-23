window.onload = function () {
    printLog();
    chrome.extension.sendRequest({ url: location.host }, function (data) {
        if (data.type == 1) {
            taskSignIn(data);
        } else if (data.type == 3) {
            setInterval(function () {
                location.reload();
            }, 1000 * 60 * 5);
        }
    });
};

function printLog() {
    var date = new Date();
    console.log("leo:" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function xiaoMiLogin(data) {
    setTimeout(function () {
        document.querySelector("#username").value = data.username;
        document.querySelector("#pwd").value = data.password;
        document.querySelector("#login-button").click();
    }, 5 * 1000);
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