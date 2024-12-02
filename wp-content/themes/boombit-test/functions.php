<?php 

// active theme setup from guthenberg
function boombit_test_setup() {
    // align blocks
    add_theme_support('align-wide');
    
    // Colors
    add_theme_support('editor-color-palette', [
        [
            'name' => __( 'Primary', 'boombit-test' ),
            'slug' => 'primary',
            'color' => '#fc560c',
        ],
        [
            'name' => __( 'Secondary', 'boombit-test' ),
            'slug' => 'secondary',
            'color' => '#9645fa',
        ],
        [
            'name' => __( 'Tertiary', 'boombit-test' ),
            'slug' => 'tertiary',
            'color' => '#16191e',
        ],
        [
            'name' => __( 'Fourth', 'boombit-test' ),
            'slug' => 'fourth',
            'color' => '#2a2e37',
        ],
        [
            'name' => __( 'Default', 'boombit-test' ),
            'slug' => 'default',
            'color' => '#000',
        ],

        [
            'name' => __( 'Default Secondary', 'boombit-test' ),
            'slug' => 'default-secondary',
            'color' => '#e9efe1',
        ],

    ]);

    // Soporte para fuentes personalizadas
    add_theme_support('editor-font-sizes', [
        [
            'name' => __( 'Small', 'boombit-test' ),
            'size' => 12,
            'slug' => 'small',
        ],
        [
            'name' => __( 'Normal', 'boombit-test' ),
            'size' => 16,
            'slug' => 'normal',
        ],
        [
            'name' => __( 'Large', 'boombit-test' ),
            'size' => 36,
            'slug' => 'large',
        ],
    ]);

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css'); // Archivo CSS para Gutenberg
}
add_action('after_setup_theme', 'boombit_test_setup');

// Enqueue Theme Scripts and Styles
function boombit_test_enqueue_scripts() {
    wp_enqueue_style('boombit-test-style', get_stylesheet_uri());
    wp_enqueue_style('boombit-test-fonts', get_template_directory_uri()."/assets/css/fonts.css");
    wp_enqueue_style('boombit-test-css', get_template_directory_uri()."/assets/css/boombit-test.css");
}
add_action('wp_enqueue_scripts', 'boombit_test_enqueue_scripts');

function boombit_test_custom_menus() {
    register_nav_menus([
        'main-menu' => __('Main Menu', 'boombit-test-custom_menus'),
    ]);
}
add_action('init', 'boombit_test_custom_menus');

add_theme_support('editor-font-family', [
    [
        'name' => __('Chakra Petch', 'boombit-test'),
        'slug' => 'Chakra Petch',
        'font-family' => "'Chakra Petch', sans-serif",
    ],
]);
