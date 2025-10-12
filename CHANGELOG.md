## Changelog

### 1.1.0 - 2020-04-10

- Dropped support for phpBB 3.1. Requires phpBB 3.2 or newer as its minimum requirement.
- Shortened the time before the scroll page buttons appear—they now appear almost as soon as scrolling begins. This should improve usability for users who like to scroll to the bottom of the page.
- Hovering over the scroll page buttons will subtly highlight the up or down arrows individually now, improving user feedback.
- Moved JavaScript code to an externally loaded JS file. This should provide minor optimization since the JS file will be cached by the browser, resulting in less to code to load per HTML page.
- Replaced the arrow images with Font Awesome icons. This should provide minor optimization by no longer needing to download image files for the arrows and is more easily styled for third party styles.
- Added comments to the CSS file (and the README) to help style authors change their appearance to match their style.

### 1.0.3 - 2020-02-06

- Negligible CSS and JavaScript changes.

### 1.0.2 - 2017-01-10

- Removed executable file permissions from the image files.

### 1.0.1 - 2016-01-30

- Fixed display and positioning for right-to-left languages.

### 1.0.0 - 2016-01-26

- First validated release.
