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
	/** @var string Require 3.2.0-a1 due to use of font icons */
	const PHPBB_VERSION = '3.2.0-a1';

	/**
	 * Enable extension if phpBB minimum version requirement is met
	 *
	 * @return bool
	 */
	public function is_enableable()
	{
		$config = $this->container->get('config');
		return phpbb_version_compare($config['version'], self::PHPBB_VERSION, '>=');
	}
}
