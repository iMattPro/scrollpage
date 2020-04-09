# Scroll Page extension for phpBB

This phpBB extension adds a scroll to top and bottom button making it easier to navigate long pages.

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
Style authors can update the look of the scroll page buttons via the `scroll-page` class. 
```css
.scroll-page {
    background-color: #000000; /* Scroll button color */
    border-radius: 3px; /* Rounded corners, set to 0 for none */
    color: #ffffff; /* Arrow color */
}
```

## License
[GNU General Public License v2](license.txt)

© 2015 - Matt Friedman
