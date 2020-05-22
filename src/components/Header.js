import React from 'react';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
const Header = () =>  (
    <Container fluid={true}>
        <Row xs={12} md={5}>
            <Col className="padding-0" xs={12} md={4}>
                <Image fluid= {true} className="my-image" src="https://live.staticflickr.com/65535/49922440751_f4f170eaeb_z.jpg"></Image>
            </Col>
            <Col className="padding-0" xs={12} md={8}>
                <Navbar/>
                <Jumbotron className = "my-name" fluid= {true}>
                <Container>
                    <h1>Myat Hmu Khin</h1>  
                </Container>
                </Jumbotron> 
            </Col>
        </Row>
    </Container>

);

export default Header;