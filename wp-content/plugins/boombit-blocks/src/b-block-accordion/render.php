<?php

function render_block_custom_boombit_accordion_blocks($attributes, $content, $block) {
    $atts = [
        "title"=>"", "content"=>"", "icons"=>"", "items"=>[]
    ];

    extract(
            shortcode_atts($atts, $attributes)
    );

    ob_start(); ?>
   
    <div class='boombit-blocks-accordion'>
        <div class="boombit-blocks-accordion-row">
            <div class='col col-50 boombit-blocks-accordion-content-part'>
                <h2 class='boombit-blocks-accordion-title chakra-petch-bold'><?php echo $title;?></h2>
                <div class='boombit-blocks-accordion-content'> <p><?php echo $content;?></p> </div>
                <div class='boombit-blocks-accordion-icons'></div>
            </div>
            <div class='col col-40'>							
                <div class='boombit-blocks-accordion-section'>
                    <?php foreach($items as $index => $item) : ?>
                    
                        <div class="boombit-blocks-accordion-item" key=<?php echo $index;?>>
                            <h3 class='boombit-blocks-accordion-item-title chakra-petch-bold'><?php echo $item['title'];?> </h3>
                            <div class='boombit-blocks-accordion-item-content'><?php echo $item['content'];?> </div>
                        </div>
                   
                    <?php endforeach; ?>
                </div>
            </div>
        </div>			
        
    </div>
    <?php
     return ob_get_clean();
		
}
