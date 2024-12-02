<?php

function render_block_custom_boombit_blocks_features_blocks($attributes, $content, $block) {
    $items = $attributes['items'] ?? [];
    $output ='<div class="boombit-blocks-features">
        <div class="boombit-blocks-features-header">
            <h2 class="boombit-blocks-features-title chakra-petch-bold ">'.$attributes['title'].'</h2>
        </div>
    ';
    $output .= '<div class="boombit-blocks-features-content">';
    $i=1;
    foreach ($items as $item) {
        $output .= sprintf(
            '<div class="boombit-blocks-features-item">
                            <div class="boombit-blocks-features-item-header">
                                <i class="__number chakra-petch-light">0%s.</i>
                                <div class="__icon"></div>
                            </div>
                            <div class="boombit-blocks-features-item-content">
                                <h3 class="item-title chakra-petch-semibold">%s</h3>                                
                                <a href="%s" class="item-link"><span class="dashicons dashicons-arrow-right-alt"></span>%s</a>
                            </div>
                            
            </div>',
            
            $i,
            esc_html($item['title']),
            esc_html($item['link']),
            esc_html($item['link_title'])
        );
        $i++;
    }
    $output .= '</div></div>';
    return $output;
   
		
}


wp_register_style(
    'slick-css',
    BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH.'/vendor/slick/slick.css',
    [],
    '8.4.0' // Versión de Swiper
);

wp_register_script(
    'slick-js',
    BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH.'/vendor/slick/slick.min.js',
    [],
    '8.4.0',
    true
);


wp_register_script(
    'boombit-block-carousel-features-slick',
    BOOMBIT_BLOCK_CUSTOM_BLOCKS_PATH. '/src/b-block-carousel-features/frontend.js', // Cambia la ruta según tu estructura.
    [],
    '1.0.0',
    true
);