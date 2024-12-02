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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import { useEffect } from '@wordpress/element';
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
		const newItems = [...items, { icon: __('Icon', 'boombit-blocks'),title: __('Title', 'boombit-blocks'), link: __('Link', 'boombit-blocks'), link_title: __('Link Title', 'boombit-blocks')}];
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
                            
							<TextControl
								label={__('Title', 'boombit-blocks')}
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
							/>							
							
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
				<div className='boombit-blocks-features'>
					<div className='boombit-blocks-features-header'>
						<h2 className="boombit-blocks-features-title">{title}</h2>
					</div>
					<div className='boombit-blocks-features-container'>
						
						<div className='boombit-blocks-features-content'>
							{items.map((item, index) => (
								<div className="boombit-blocks-features-item" key={index}>
									<div className="boombit-block-carousel-features-content-2-item-header">
										<i class="__number"></i>
										<div class="__icon"></div>
									</div>
									<div className="boombit-block-carousel-features-content-2-item-content">
										<div className='item-title'>{item.title} </div>										
										<a href={item.link} className='item-link'>{item.link_title}</a>
									</div>
								</div>
							))}
						</div>
					</div>
					
				</div>
				
            </div>
		</>
		
	);
}
