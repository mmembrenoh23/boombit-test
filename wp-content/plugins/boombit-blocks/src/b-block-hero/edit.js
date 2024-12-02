/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { Button, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { urlimage, title, subtitle, description, button_text, button_url} = attributes;
	console.log(urlimage);

	
	return (
		<div {...useBlockProps()}>
               <InspectorControls key="settings">
			   	<PanelBody title={__('Display Settings', 'boombit_block')} initialOpen={true}>
				   <TextControl
                        
                        label={ __(
                            'Title',
                            'title-hero-block'
                        ) }
                        value={title }
                        onChange={ ( value ) =>
                            setAttributes( { title: value } )
                        }
                    />

					<TextControl
                        
                        label={ __(
                            'Subtitle',
                            'subtitle-hero-block'
                        ) }
                        value={subtitle}
                        onChange={ ( value ) =>
                            setAttributes( { subtitle: value } )
                        }
                    />

					<TextControl
                        
                        label={ __(
                            'Button Text',
                            'button-text-block'
                        ) }
                        value={button_text}
                        onChange={ ( value ) =>
                            setAttributes( { button_text: value } )
                        }
                    />

					<TextControl
                        
                        label={ __(
                            'Button Url',
                            'button-url-block'
                        ) }
                        value={button_url}
                        onChange={ ( value ) =>
                            setAttributes( { button_url: value } )
                        }
                    />
					<RichText 
						style={{border:"1px solid #ccc", padding:"10px", height:"100px;", marginBottom:"20px"}}
					label={
						__(
											'Description',
											'description-hero-block'
										) }
										value={description}
										onChange={ ( value ) =>
											setAttributes( { description: value } )
										} />

					<MediaUpload
                            onSelect={(media) => setAttributes({ urlimage: media.sizes.full.url })}
                            allowedTypes={['*']}
                            render={({ open }) => (
                                <Button onClick={open} variant="primary">
                                    {__('Choose File', 'custom-media-block')}
                                </Button>
                            )}
                    />
					
				</PanelBody>
			   </InspectorControls>

			   <ServerSideRender
					block="create-block/boombit-blocks-hero"
					attributes={{ ...attributes, innerContent: 'true' }}
					httpMethod="POST"
				/>
			  
		</div>
	);
}
