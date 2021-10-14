import { Col, Row, Container } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import API from '../API.js';
import "./customer.css";
import icon1 from './icons/1.jpg';
import icon2 from './icons/2.jpg';
import icon3 from './icons/3.jpg';
import icon4 from './icons/4.jpg';

function Customer(props) {

    function handleClick(serviceType) {
        API.getTicket(serviceType);
    }

    return (
        <Container>

            <Row className="justify-content-center mt-3 text">GET YOUR TICKET</Row>

            <Row className="justify-content-center mt-3">
                <Col xs lg="4">
                    <Card>
                        <Card.Img variant="top" src={icon1} />
                        <Card.Body>
                            <Card.Title>SERVICE 1</Card.Title>
                            <Button variant="primary" onClick={() => handleClick("service1")}>Add me to queue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="4">
                    <Card>
                        <Card.Img variant="top" src={icon2} />
                        <Card.Body>
                            <Card.Title>SERVICE 2</Card.Title>
                            <Button variant="primary" onClick={() => handleClick("service2")}>Add me to queue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2 ml-2">
                <Col xs lg="4">
                    <Card>
                        <Card.Img variant="top" src={icon3}/>
                        <Card.Body>
                            <Card.Title>SERVICE 3</Card.Title>
                            <Button variant="primary" onClick={() => handleClick("service3")}>Add me to queue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="4">
                    <Card>
                        <Card.Img variant="top" src={icon4}/>
                        <Card.Body>
                            <Card.Title>SERVICE 4</Card.Title>
                            <Button variant="primary" onClick={() => handleClick("service4")}>Add me to queue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Customer;

