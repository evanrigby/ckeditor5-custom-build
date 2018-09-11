

/**
 * @module image-url/image-url
 */

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class ImageUrl extends Plugin {
	
	init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'imageUrl', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const imageUrl = prompt( 'Image URL' );

                editor.model.change( writer => {
                    const imageElement = writer.createElement( 'image', {
                        src: imageUrl
                    } );

                    // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                } );
            } );

            return view;
        } );
    }
}