import { Col, Row, Container } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import API from '../API.js';

function Officer(props) {

    return (
        <Container>

            <Row className="mt-5">
                <Col></Col>
                <Col sm="auto">
                    <Button variant="primary" size="lg">Next Client</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className ="mt-5">
                <Col>Next customer to serve:</Col>
            </Row>

        </Container>
    );
};

export default Officer;

