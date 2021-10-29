import React from 'react';
import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap';


export default function Content() {
return(
  // Main Div is React Fragment make sure all other thigns are put inside of it
  <React.Fragment>
    {/* Container is where the card group is contained */}
    <Container fluid style={containerStyle}>
      {/* Where cards are */}
      <CardGroup style={{flex: 1}} >
        <Card  >
        <Card.Header as="h5" style={headerStyle}>Next Event</Card.Header>
        {/* Row is card row */}
          <Row>
            <Col>
            {/* SVG This is where the image goes */}
            <svg
            className="bd-placeholder-img"
            width="100%"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          />
            </Col>
            <Col>
            {/* Card body has card title and card text inside of it */}
              <Card.Body>
              <Card.Title as="h1">Blah blah blah</Card.Title>
              <Card.Text as="h4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fuga fugit quae quia adipisci consectetur non eaque saepe, quibusdam deleniti delectus recusandae, ipsam sint et ipsum consequatur nisi voluptate obcaecati.
              </Card.Text>
              {/* Regular button with extra stylings */}
              <div id= 'button'>
              <Button style={buttonStyle}>Go somewhere</Button>
              </div>
              </Card.Body>
              
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>

    {/* Upcoming Events Container */}
    <Container fluid style={containerStyle}>
      <CardGroup style={{flex: 1}} >
        {/* Multiple cards in card groups, literally copy and paste */}

        <Card  >
        <Card.Header as="h5" style={headerStyle}>Coming Soon</Card.Header>
          <Row Style={rowStyle}>
            <Col>
            <svg
            className="bd-placeholder-img"
            width="100%"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          />
            </Col>
            <Col>
            
              <Card.Body>
              <Card.Title as="h1">Blah blah blah</Card.Title>
              <Card.Text as="h4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fuga fugit quae quia adipisci consectetur non eaque saepe, quibusdam deleniti delectus recusandae, ipsam sint et ipsum consequatur nisi voluptate obcaecati.
              </Card.Text>
              <div id= 'button'>
              <Button style={buttonStyle}>Go somewhere</Button>
              </div>
              </Card.Body>
              
            </Col>
          </Row>
          {/* Row 2 */}
          <Row Style={rowStyle}>
            <Col>
            <svg
            className="bd-placeholder-img"
            width="100%"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          />
            </Col>
            <Col>
            
              <Card.Body>
              <Card.Title as="h1">Blah blah blah</Card.Title>
              <Card.Text as="h4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fuga fugit quae quia adipisci consectetur non eaque saepe, quibusdam deleniti delectus recusandae, ipsam sint et ipsum consequatur nisi voluptate obcaecati.
              </Card.Text>
              <div>
              <Button style={buttonStyle}>Go somewhere</Button>
              </div>
              </Card.Body>
              
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>

    </React.Fragment>
    


    
  )
    
}
// This is where the styles ares
const buttonStyle = {
    alignItems: 'center',
    float: 'right',
    backgroundColor: '#771EF7',
    padding: 10,
    
  };
const headerStyle={
    marginTop: -1,
    marginLeft:-2,
    marginRight:-2,
    marginBottom:-1.5,

    backgroundColor: '#771EF7',
    color: '#FFFFFF',
}
const containerStyle ={
    padding:0,
}
const rowStyle ={
  border:'2px solid black',
}
