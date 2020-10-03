
// Bharat's code
let toggleOnOff = document.getElementById("myonoffswitch2");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(`Your question was: ${request.theQuestion}`);
    // console.log(toggleOnOff.checked);
    sendResponse({ state: "ON" });
});