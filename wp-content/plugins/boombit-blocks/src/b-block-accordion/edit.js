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
import {  useBlockProps, InspectorControls,MediaUpload,RichText } from '@wordpress/block-editor';
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
	const {  title,content,icons,items } = attributes;
	
	const blockProps = useBlockProps();
	//creating new items
	const addItem = () => {
		//setting the fields
		const newItems = [...items, { title: __('Title', 'boombit-blocks'), content: __('Content', 'boombit-blocks') }];
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
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Content', 'boombit-blocks')}
						</legend>
						<RichText 
							style={{border:"1px solid #ccc", padding:"10px",marginBottom:"20px"}}
							label={ __('Content', 'boombit-blocks') }
								value={content}
								onChange={ ( value ) =>
									setAttributes({ content:value })
								} />
					</fieldset>

                    {items.map((item, index) => (
                        <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                            
							<TextControl
								label={__('Title', 'boombit-blocks')}
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
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
				<div className='boombit-blocks-accordion'>
					<div class="boombit-blocks-accordion-row">
						<div className='col col-50'>
							<h2 className='boombit-blocks-accordion-title'>{title}</h2>
							<div className='boombit-blocks-accordion-content'> <p>{content}</p> </div>
							<div className='boombit-blocks-accordion-icons'></div>
						</div>
						<div className='col col-50'>							
							<div className='boombit-blocks-accordion-section'>
								{items.map((item, index) => (
									<div className="boombit-blocks-accordion-item" key={index}>
										<div className='boombit-blocks-accordion-item-title'>{item.title} </div>
										<div className='boombit-blocks-accordion-item-content'>{item.content} </div>
									</div>
								))}
							</div>
						</div>
					</div>			
					
				</div>
				
            </div>
		</>
		
	);
}
