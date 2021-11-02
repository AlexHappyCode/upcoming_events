import { Container, CardGroup, Card, Row, Col, Button } from "react-bootstrap";

export default function EventCard(props) {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Row>
            <Col>
              <Card.Header as="h5">{props.eventHeader}</Card.Header>
              <Card.Img
                src={
                  "https://www.google.com/logos/doodles/2021/halloween-2021-6753651837109122-law.gif"
                }
                fluid={true}
                alt="Card image"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>Date here</Card.Text>
                <Card.Title as="h2">{props.eventTitle}</Card.Title>
                <Card.Text as="h4">{props.eventDescription}</Card.Text>
                <div id="button">
                  <Button>Go somewhere</Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
}
