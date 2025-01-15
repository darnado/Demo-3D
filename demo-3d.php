<?php
/**
 * Plugin Name: Demo 3D
 * Plugin URI: caledrosforge.com
 * Description: A Gutenberg demo block that uses Three.js.
 * Version: 1.0.0
 * Requires at least: 6.6
 * Requires PHP: 7.4
 * Author: David Arnado
 * Author URI: caledrosforge.com/about
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain: three-js-block
 * Domain Path: /languages
 * 
 * Demo 3D - A Gutenberg block that uses Three JS.
 * Copyright (C) 2025  David Arnado
 * 
 * This file is part of Demo 3D.
 * 
 * Demo 3D is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.

 * Demo 3D is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License along
 * with Demo 3D; if not, see <https://www.gnu.org/licenses/>.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Define base folder
define('THREE_JS_BASE_FOLDER', plugin_dir_path(__FILE__));

// Load core files
require_once(THREE_JS_BASE_FOLDER . 'core/loaders/blocks-category-loader.php');
require_once(THREE_JS_BASE_FOLDER . 'core/loaders/blocks-loader.php');

// Load initial hooks
add_action('init', 'interactive_3d_blocks_loader');

// Conditional block category loader based on WordPress version
add_filter('block_categories_all','interactive_3d_blocks_category_loader', 10, 1 );
