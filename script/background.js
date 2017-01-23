function test() {

    alert("test");
}
var i = 0;
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    sendResponse(i);
    i++;
});  
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


