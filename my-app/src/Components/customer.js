import { Col, Row, Container } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import API from '../API.js';

function Customer(props) {

    function handleClick(serviceType){
        API.getTicket(serviceType);
    }

    return (

        <Container className="d-flex justify-content-center">
        <Col>
            <Row>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>SERVICE 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleClick("service1")}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
            <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>SERVICE 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleClick("service2")}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
        <Col>
         <Row>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>SERVICE 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleClick("service3")}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
            <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>SERVICE 4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleClick("service4")}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    </Container>
        
    );
};

export default Customer;

