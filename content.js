let video = null;

// Find the video element
function getVideoElement() {
  if (!video) {
    video = document.querySelector("video");
  }
  return video;
}

// Message listener to handle tab visibility changes
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "pause" && getVideoElement()) {
    getVideoElement().pause();
  } else if (message.action === "play" && getVideoElement()) {
    getVideoElement().play();
  }
});
