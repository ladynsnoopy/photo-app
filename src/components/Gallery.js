import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GalleryImage from './GalleryImage';

const verticalimages = [
    "https://live.staticflickr.com/65535/49924601728_bf58068bfe_b.jpg",
    "https://live.staticflickr.com/65535/49925425837_26c85c16d2_b.jpg",
    "https://live.staticflickr.com/65535/49925425962_2873ee8c0d_b.jpg",
    "https://live.staticflickr.com/65535/49925426457_59c95d2a8b_b.jpg",
    "https://live.staticflickr.com/65535/49925426557_10efd9f656_b.jpg",
    "https://live.staticflickr.com/65535/49924602773_dbf0222979_b.jpg",
    "https://live.staticflickr.com/65535/49925580727_7c6cc475db_b.jpg",
    "https://live.staticflickr.com/65535/49925580622_f70fd109c5_b.jpg",
    ""

];
const horizontalimages = [
    "https://live.staticflickr.com/65535/49924602933_d408438f4b_b.jpg",
    "https://live.staticflickr.com/65535/49925427007_73ba83650f_b.jpg",
    "https://live.staticflickr.com/65535/49925123256_cdb7e8ab5c_b.jpg",
    "https://live.staticflickr.com/65535/49924602238_e9b5709869_b.jpg",
    "https://live.staticflickr.com/65535/49924601213_bd498fcbce_b.jpg",
    "https://live.staticflickr.com/65535/49925278886_c5d2e41f52_b.jpg",
    "https://live.staticflickr.com/65535/49924758938_73e744af30_b.jpg",
    "https://live.staticflickr.com/65535/49925581877_4036bdaed6_b.jpg",
    "https://live.staticflickr.com/65535/49924760613_89205c5600_b.jpg",
    "https://live.staticflickr.com/65535/49925281981_c5bd1e0ab2_b.jpg",
    "https://live.staticflickr.com/65535/49925583502_2b298c5672_b.jpg"

];


const Gallery = () =>  (
    <div id="Gallery">
    <Row>
        <Container className="my-header" >
            <h1 >My Photographs</h1>
        </Container>
    </Row>
    <Row> 
        <Col xs={6} md={3}>
            <GalleryImage imagesource={verticalimages[4]} />  
        </Col>      
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[5]} /> 
        </Col>
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[6]} />
        </Col>
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[3]} />
        </Col>
    </Row>
    <Row>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[0]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[1]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[2]} />
        </Col>
    </Row>
    <Row> 
        <Col xs={6} md={3}>
            <GalleryImage imagesource={verticalimages[0]} />  
        </Col>      
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[1]} /> 
        </Col>
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[2]} />
        </Col>
        <Col xs={6} md= {3}>
            <GalleryImage imagesource={verticalimages[7]} />
        </Col>
    </Row>
    <Row>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[3]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[4]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[5]} />
        </Col>
    </Row>
    <Row>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[7]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[8]} />
        </Col>
        <Col md={4}>
            <GalleryImage imagesource={horizontalimages[10]} />
        </Col>
    </Row>
    </div>
    

);

export default Gallery;