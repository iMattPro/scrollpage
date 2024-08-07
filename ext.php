<?php
/**
 *
 * Scroll Page
 *
 * @copyright (c) 2015 Matt Friedman
 * @license GNU General Public License, version 2 (GPL-2.0)
 *
 */

namespace vse\scrollpage;

/**
* Extension class for custom enable/disable/purge actions
*/
class ext extends \phpbb\extension\base
{
	/**
	 * Enable extension if phpBB minimum version requirement is met
	 * Require 3.2.0 due to relocated INCLUDECSS and FONTAWESOME
	 *
	 * @return bool
	 */
	public function is_enableable()
	{
		return phpbb_version_compare(PHPBB_VERSION, '3.2.0', '>=')
			&& phpbb_version_compare(PHPBB_VERSION, '4.0.0-dev', '<');
	}
}
