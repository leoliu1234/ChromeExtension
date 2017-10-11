window.addEventListener('load', function () {
    document.getElementById("btn_save").addEventListener("click", function () {
        var pattens = document.querySelector("#txt_patten").value.split('\n');
        if (!pattens || pattens.length < 1) {
            return;
        }
        chrome.extension.getBackgroundPage()
        
    });
});