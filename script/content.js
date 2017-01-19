(function () {
    console.log("begin:" + (new Date()).toString());
    setTimeout(function () {
        location.reload();
    }, 1000 * 60 * 5);
})();