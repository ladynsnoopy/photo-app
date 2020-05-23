import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Container from 'react-bootstrap/Container';
import LifeSection from './components/Life'

const PhotoApp = () => (
    <Container fluid={true}>
        <Header />
        <Gallery />
        <LifeSection />
    </Container>
);

export default PhotoApp;
