# YouTube Tab Pauser

YouTube Tab Pauser is a Chrome extension that automatically pauses YouTube videos when the tab is inactive and resumes playback when the tab becomes active again. This functionality ensures you don't miss any part of the video while multitasking across tabs.

## Features
- Automatically pauses YouTube videos when switching to another tab.
- Resumes playback when you return to the YouTube tab.
- Lightweight and efficient, utilizing Chrome's Manifest V3.

## Installation

1. Clone this repository or download the ZIP file.
2. Extract the contents if downloaded as a ZIP.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" using the toggle in the top-right corner.
5. Click on "Load unpacked" and select the directory containing the extension files.
6. The extension should now be loaded and ready to use.

## File Structure

```
root
├── manifest.json    # Defines the extension's metadata and permissions
├── background.js    # Manages tab activity and sends messages to content scripts
├── content.js       # Handles pausing and playing YouTube videos
```

## How It Works

### manifest.json
Defines the extension's properties, permissions, and files to be used. Notable configurations include:
- **Permissions**: Access to tabs and YouTube domains.
- **Background Script**: Uses `background.js` to monitor tab activity.
- **Content Script**: Injects `content.js` into YouTube pages.

### background.js
Listens for tab activity events:
- `onActivated`: Detects when a tab becomes active and sends a message to play or pause the video.
- `onUpdated`: Ensures videos are resumed when a tab is reloaded or its status changes to "complete."

### content.js
Injected into YouTube tabs to control video playback:
- Locates the `<video>` element on the page.
- Pauses or plays the video based on messages from the background script.

## Usage
1. Open a YouTube video in a tab.
2. Switch to another tab, and the video will pause automatically.
3. Return to the YouTube tab, and the video will resume playing.

## Permissions
This extension requires the following permissions:
- **tabs**: To monitor tab activity and send messages.
- **activeTab**: To interact with the active tab.
- **scripting**: To inject content scripts dynamically.
- **host_permissions**: Restricted to YouTube URLs to ensure functionality is limited to relevant domains.

## Future Improvements
- Add a toggle button to enable/disable the extension from the toolbar.
- Support additional video platforms.
- Provide options to configure the behavior (e.g., delay before pausing).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

