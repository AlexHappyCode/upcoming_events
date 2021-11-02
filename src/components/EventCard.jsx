import { Container, CardGroup, Card, Row, Col, Button } from "react-bootstrap";

export default function EventCard() {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Header as="h5">Happening Soon</Card.Header>
          <Row>
            <Col>
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
                <Card.Title as="h1">Blah blah blah</Card.Title>
                <Card.Text as="h4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  fuga fugit quae quia adipisci consectetur non eaque saepe,
                  quibusdam deleniti delectus recusandae, ipsam sint et ipsum
                  consequatur nisi voluptate obcaecati.
                </Card.Text>
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
