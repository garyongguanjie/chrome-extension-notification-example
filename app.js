document.getElementById("test-button").onclick = ()=>{
    chrome.notifications.create(
        null,
        {
            iconUrl:"icon-32.png",
            message:"test message",
            title:"test title",
            type:"basic"
        }
    )
};