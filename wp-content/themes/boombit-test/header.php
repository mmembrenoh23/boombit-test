<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo esc_url(get_stylesheet_uri()); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="boombit-test-header">
        <div class="boombit-test-menu-flags">
            <nav class="main-menu">
                <?php
                wp_nav_menu([
                    'theme_location' => 'main-menu',
                    'menu_class' => 'menu-boombit-test chakra-petch-regular', 
                    'container' => false,  
                ]);
                ?>
            </nav>

            <div class="boombit-test-flag">
                <?php echo do_shortcode('[gtranslate]');  ?>
            </div>
        </div>
    </header>