chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tabs = await chrome.tabs.query({ url: "*://www.youtube.com/*" });
  
    tabs.forEach((tab) => {
      const action = tab.id === activeInfo.tabId ? "play" : "pause";
      chrome.tabs.sendMessage(tab.id, { action });
    });
  });
  
  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("youtube.com")) {
      chrome.tabs.sendMessage(tabId, { action: "play" });
    }
  });
  