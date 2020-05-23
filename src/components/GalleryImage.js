import React from 'react';
import Image from 'react-bootstrap/Image'


const GalleryImage = (props) =>  (
    <Image className="gallery-image" src={props.imagesource} fluid={true} />
);

export default GalleryImage;