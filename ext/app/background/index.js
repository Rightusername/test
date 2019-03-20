chrome.runtime.onInstalled.addListener(() => {
    localStorage.setItem('data', Date.now());
})