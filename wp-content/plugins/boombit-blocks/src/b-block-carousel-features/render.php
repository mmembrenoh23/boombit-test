<?php

function render_block_custom_boombit_carousel_features_blocks($attributes, $content, $block) {
    $items = $attributes['items'] ?? [];
    $output ='<div class="boombit-block-carousel-features">
        <div class="boombit-block-carousel-features-header">
            <div class="boombit-block-carousel-features-title"><h2 class="chakra-petch-bold ">'.$attributes['title'].'</h2></div>
            
        </div>
        <div class="boombit-block-carousel-features-container">
        <div class="boombit-block-carousel-features-wrapper">
        <div class="boombit-block-carousel-features-wrap">
    ';
    $output .= '<div class="boombit-block-carousel-features-content">';
    foreach ($items as $item) {
        $output .= sprintf(
            '<div class="boombit-block-carousel-features-item">
                            <img src="%s"/>
							<div class="item-title chakra-petch-semibold">%s</div>
							<div class="item-sub-title chakra-petch-regular">%s</div>
							<div class="separator"></div>
							<div class="item-content chakra-petch-regular">%s </div>
							<a href="%s" class="item-link"><span class="dashicons dashicons-arrow-right-alt"></span> %s</a>
            </div>',
            
            esc_html($item['image']),
            esc_html($item['title']),
            esc_html($item['subtitle']),
            wp_kses_post($item['content']),
            esc_html($item['link']),
            esc_html($item['link_title'])
        );
    }
    $output .= '</div></div>
        <button class="prev"></button>
        <button class="next"></button>
        <div class="thedots"></div></div></div>
    </div>';
    return $output;
   
		
}

