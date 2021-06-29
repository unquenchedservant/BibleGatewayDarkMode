function restoreOptions(){

    var mainItem = browser.storage.sync.get('main');
    mainItem.then((res) => {
        document.querySelector("#main").value = res.main || '#121212';
    });
    var accentItem = browser.storage.sync.get('accent');
    accentItem.then((res) =>{
        document.querySelector("#accent").value = res.accent || "#383838";
    });
    var textItem = browser.storage.sync.get('text');
    textItem.then((res) =>{
        document.querySelector("#text").value = res.text || "#9cb9d3"
    });
    var wojItem = browser.storage.sync.get('woj');
    wojItem.then((res) => {
        document.querySelector("#woj").value = res.woj || "#b36c38"
    });
}
function getTabId(tabs){
    for(let tab of tabs){
        if(tab.url.includes("biblegateway.com")){
            browser.tabs.reload(tab.id);
        }
    }
}
function refreshTab(){
    var i = 0;
    browser.tabs.query({currentWindow:false}).then((tabs)=>{
        getTabId(tabs);
        browser.tabs.query({currentWindow:true}).then((tabss)=>{
            getTabId(tabss);
            console.log("Reloaded any BibleGateway tabs");
        });
    });
    
    
}
function mainChange(e){
    browser.storage.sync.set({
        main: document.querySelector("#main").value
    });
    refreshTab();
}
function accentChange(e){
    browser.storage.sync.set({
        accent: document.querySelector("#accent").value
    });
    refreshTab();
}
function textChange(e){
    browser.storage.sync.set({
        text: document.querySelector("#text").value
    });
    refreshTab();
}
function wojChange(e){
    browser.storage.sync.set({
        woj: document.querySelector("#woj").value
    });
    refreshTab();
}
function resetAll(e){
    browser.storage.sync.set({
        main: "#121212",
        accent: "#383838",
        text: "#9cb9d3",
        woj: "#b36c38"
    })
    refreshTab();
}
document.querySelector("#main").addEventListener("change", mainChange, false)
document.querySelector("#accent").addEventListener("change", accentChange, false)
document.querySelector("#text").addEventListener("change", textChange, false)
document.querySelector("#woj").addEventListener("change", wojChange, false)
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", resetAll)