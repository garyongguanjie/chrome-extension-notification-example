chrome.action.onClicked.addListener(()=>{
    chrome.tabs.create(
        {active:true,url:"app.html"}
    )
});