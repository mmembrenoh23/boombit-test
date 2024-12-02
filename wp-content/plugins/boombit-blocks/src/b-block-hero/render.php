<?php

function render_block_custom_boombit_blocks($attributes, $content, $block) {
   
    $atts = [
        "urlimage"=>"", "title"=>"", "subtitle"=>"", "description"=>"", "button_text"=>"", "button_url"=>""
    ];

    extract(
            shortcode_atts($atts, $attributes)
    );

    $txt = $title;

    $txt = explode(" ",$txt);
    $txt[count($txt) - 1] = "<span class='highlight'>".($txt[count($txt) - 1])."</span>";
    $txt = implode(" ",$txt);

    ob_start(); ?>
    
			<div  class="boombit-hero-blocks" style="background-image:url(<?php echo $urlimage; ?>) ">
				<div class="boombit-hero-container">
					<div class='boombit-hero-row'>
                        <div class="col col-40">

                        </div>
                        <div class="col col-40">
                            <div class="boombit-hero-title">
                                <h1><span class="dots"></span><?php echo $txt; ?></h1>
                            </div> 
                            <div class="boombit-hero-subtitle">
                                <h2><?php echo $subtitle; ?></h2>
                            </div>
                            <div class="boombit-hero-description">
                                <?php echo $description;  ?>
                            </div>

                            <a class='boombit-hero-button' href="<?php echo $button_url;  ?>"><?php echo $button_text;  ?></a>
                        </div>
                        <div class="col col-10">

                        </div>
						
					</div>
				</div>
			</div>

			<?php
        return ob_get_clean();
		
}
