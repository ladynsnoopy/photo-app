import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const Life = () =>  (
        <Container>
            <Row>
                <Col md={12}>
                    <div id="my-life">
                    <Card className="life-paragraph">
                    <Card.Body>
                        <h1 className="alternate-header">My Life</h1>
                        <Card.Text className="text-muted">
                        <p>
                        20 Years Old. Burmese. Computer Science student.
                        <br></br> 
                        I love animals and photography. I enjoy capturing places of worship and nature. Living in SG for > 14 years.
                        <br></br> 
                        "Pain is certain but suffering is optional" - Buddha
                        </p>
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Img variant="top" src="https://live.staticflickr.com/65535/49925715627_324e680ce1_b.jpg" />
                    </Card>
        
                    </div>
                </Col>
            </Row>
        </Container>
        

    


);

export default Life;