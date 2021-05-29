var menuitem = {
    "id": "wikit",
    "title": "wikit",
    "contexts": ["selection"]
}

chrome.contextMenus.create(menuitem);

chrome.contextMenus.onClicked.addListener(function(clickedData){
    if(clickedData.menuItemId == "wikit" && clickedData.selectionText){
        var url = "https://en.wikipedia.org/wiki/"+clickedData.selectionText;
        var createData = {
            "url": url,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        }
        chrome.windows.create(createData, function(){})
    }
})