<?php
/**
 * Plugin Name:       Boombit Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boombit-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define( 'BOOMBIT_BLOCK_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'BOOMBIT_BLOCK_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH', BOOMBIT_BLOCK_PLUGIN_PATH . '/src' );
define('BOOMBIT_BLOCK_BLOCKS',[
	'b-block-accordion'=>'render_block_custom_boombit_accordion_blocks',
	'b-block-hero'=>'render_block_custom_boombit_blocks',
	'b-block-carousel-features'=>'render_block_custom_boombit_carousel_features_blocks',
	'b-block-features'=>'render_block_custom_boombit_blocks_features_blocks'
]);

foreach(BOOMBIT_BLOCK_BLOCKS as $block => $value) {
	if(file_exists(BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH.'/'.$block.'/render.php')){
		require_once BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH.'/'.$block.'/render.php';
	}
}


function create_block_boombit_blocks_block_init() {
	
	foreach(BOOMBIT_BLOCK_BLOCKS as $block =>$value) {
		register_block_type( __DIR__ . '/build/'.$block,array(
			'render_callback' => $value,
		) );

		if($block == 'b-block-carousel-features') {
			wp_register_script(
				'slick-slider',
				plugins_url( 'node_modules/slick-carousel/slick/slick.min.js', __FILE__ ),
				array( 'jquery' ), // Dependencia de jQuery
				'1.8.1',
				true
			);
		
			wp_register_style(
				'slick-style',
				plugins_url( 'node_modules/slick-carousel/slick/slick.css', __FILE__ ),
				array(),
				'1.8.1'
			);
		
			wp_register_style(
				'slick-theme',
				plugins_url( 'node_modules/slick-carousel/slick/slick-theme.css', __FILE__ ),
				array( 'slick-style' ),
				'1.8.1'
			);
		}
	}
}
add_action( 'init', 'create_block_boombit_blocks_block_init' );

function block_categories_all( $block_categories, $editor_context ) {

	//Add CS Blocks category
	$block_categories = array_merge(
		$block_categories,
		array(
			array(
				'slug' => 'boombit-blocks',
				'title' => __( 'Boombit Blocks', 'boombit-blocks' ),
			),
		)
	);

	return $block_categories;
}
add_filter( 'block_categories_all', 'block_categories_all', 10, 2 );


