(function () {
    chrome.extension.sendRequest({type:'content_type'}, function (data) {
        // alert(JSON.stringify(data));

    });
})();