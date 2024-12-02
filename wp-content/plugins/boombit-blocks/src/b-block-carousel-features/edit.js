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
import { useBlockProps, InspectorControls,MediaUpload,RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  Button,
  Placeholder,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title,items } = attributes;

	const blockProps = useBlockProps();

	//creating new items
	const addItem = () => {
		//setting the fields
		const newItems = [...items, { image: __('Image', 'boombit-blocks'),title: __('Title', 'boombit-blocks'),subtitle: __('Subtitle', 'boombit-blocks'), content: __('Content', 'boombit-blocks') , link: __('Link', 'boombit-blocks'), link_title: __('Link Title', 'boombit-blocks')}];
		setAttributes({ items: newItems });
	};

	//update the item
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};

	//remove the item
	const removeItem = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setAttributes({ items: newItems });
	};
	
	return (
		<>
			<InspectorControls>
                <PanelBody title="Settings" initialOpen={true}>
					<TextControl
								label={__('Title', 'boombit-blocks')}
								value={title}
								onChange={(value) => setAttributes({ title:value })}
							/>
                    {items.map((item, index) => (
                        <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                            <MediaUpload
							onSelect={(media) => updateItem(index, 'image', media.sizes.full.url) }
							allowedTypes={['*']}
							render={({ open }) => {
								return <img 
									src={!item.image? "https://via.placeholder.com/250":item.image}
									onClick={open}
									/>;
							}}
							/>
							<TextControl
								label={__('Title', 'boombit-blocks')}
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
							/>
							<TextControl
								label={__('Subtitle', 'boombit-blocks')}
								value={item.subtitle}
								onChange={(value) => updateItem(index, 'subtitle', value)}
							/>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__('Content', 'boombit-blocks')}
								</legend>
								<RichText 
									style={{border:"1px solid #ccc", padding:"10px",marginBottom:"20px"}}
									label={ __('Content', 'boombit-blocks') }
										value={item.content}
										onChange={ ( value ) =>
											updateItem(index, 'content', value)
										} />
							</fieldset>
							<TextControl
								label={__('Link', 'boombit-blocks')}
								value={item.link}
								onChange={(value) => updateItem(index, 'link', value)}
							/>
							<TextControl
								label={__('Link Title', 'boombit-blocks')}
								value={item.link_title}
								onChange={(value) => updateItem(index, 'link_title', value)}
							/>
							<Button
								variant="secondary"
								onClick={() => removeItem(index)}
								className="remove-item"
							>
								{__('Remove', 'boombit-blocks')}
							</Button>
                        </div>
                    ))}
                    <Button variant="primary" onClick={addItem}>
                        Add Item
                    </Button>
                </PanelBody>
            </InspectorControls>

			<div {...blockProps}>
				<div className='boombit-block-carousel-features'>
					<div className='boombit-block-carousel-features-header'>
						<h2>{title}</h2>
					</div>
					<div className='boombit-block-carousel-features-container'>
						
						<div className='boombit-block-carousel-features-content'>
							{items.map((item, index) => (
								<div className="boombit-block-carousel-features-item" key={index}>
									<img src={item.image}/>
									<div className='item-title'>{item.title} </div>
									<div className='item-sub-title'>{item.subtitle} </div>
									<div className="separator"></div>
									<div className='item-content'>{item.content} </div>
									<a href={item.link}>{item.link_title}</a>
								</div>
							))}

							
						</div>
						<button class="prev">❮</button>
							<button class="next">❯</button>
							<div class="dots"></div>
					</div>
					
				</div>
				
            </div>
		</>
		
	);
}
