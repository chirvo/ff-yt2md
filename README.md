# Firefox YouTube Video Markdown Extension

This Firefox extension prints YouTube video information to the console and displays it in a popup when the extension icon is clicked.

## Features

- Detects when a YouTube video page is loaded.
- Prints the video ID and title to the console.
- Displays a popup with the video information when the extension icon is clicked.
- Allows the user to copy the video information to the clipboard.

## Installation

1. Clone this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the sidebar.
4. Click on "Load Temporary Add-on".
5. Select any file in the `firefox-plugin` directory.

## Usage

1. Navigate to a YouTube video page.
3. Click on the extension icon to open the popup.
4. In the popup, you can copy the video information to the clipboard or close the popup.

## Files

- `src/background.js`: Handles tab updates and stores video information.
- `src/popup.html`: The HTML for the popup.
- `src/popup.js`: The JavaScript for the popup.

## License

This project is licensed under the MIT License.
