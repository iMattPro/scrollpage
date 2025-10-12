# Scroll Page extension for phpBB

This phpBB extension adds a scroll to top and bottom button making it easier to navigate long pages.

[![Tests](https://github.com/iMattPro/scrollpage/actions/workflows/tests.yml/badge.svg)](https://github.com/iMattPro/scrollpage/actions/workflows/tests.yml)

## Minimum Requirements
* phpBB 3.2.0
* phpBB 3.3.0
* PHP 5.4

## Install
1. [Download the latest validated release](https://www.phpbb.com/customise/db/extension/scroll_page/).
2. Unzip the downloaded release and copy it to the `ext` directory of your phpBB board.
3. Navigate in the ACP to `Customise -> Manage extensions`.
4. Look for `Scroll Page` under the Disabled Extensions list and click its `Enable` link.

## Uninstall
1. Navigate in the ACP to `Customise -> Manage extensions`.
2. Click the `Disable` link for Scroll Page.
3. To permanently uninstall, click `Delete Data`, then delete the `scrollpage` folder from `phpBB/ext/vse/`.

## Customizing
Style authors can change the appearance of the scroll page buttons: 
```css
/* Your style's CSS theme */

/* import the Scroll Page css file */
@import url("../../all/theme/scrollpage.css");

/* change the values in the root section */
:root {
    --scroll-page-bg-color: blue;
    --scroll-page-arrow-color: #ffffff;
    --scroll-page-border-radius: 50%;
}
```

## License
[GNU General Public License v2](license.txt)

© 2015 - Matt Friedman
