window.setInterval(dontSleep, 1500);

function dontSleep(){
    let popup = document.getElementById('confirm-button');
    let parent = popup.parentNode.parentNode.parentNode.parentNode;
    
    if (popup != null && getComputedStyle(parent).display != "none"){
        popup.click();
    }
}