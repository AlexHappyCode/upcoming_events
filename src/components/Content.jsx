import React from 'react';
import { Container, CardGroup, Card, Row, Col, Button, } from 'react-bootstrap';

<<<<<<< Updated upstream

export default function Content() {
return(
  // Main Div is React Fragment make sure all other thigns are put inside of it
  <React.Fragment>
    {/* Container is where the card group is contained */}
    <Container fluid style={containerStyle}>
      {/* Where cards are */}
      <CardGroup style={{flex: 1}} >
        <Card  >
        <Card.Header as="h5" style={headerStyle}>Happening Soon</Card.Header>
        {/* Row is card row */}
          <Row>
            <Col style={imageStyle}>
            {/*  This is where the image goes */}
            <Card.Img src={"https://www.google.com/logos/doodles/2021/halloween-2021-6753651837109122-law.gif"} fluid={true} alt="Card image" />
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

    {/* Upcoming Events Container*/}
    <Container fluid style={containerStyle}>
      {/* Where cards are */}
      <CardGroup style={{flex: 1}} >
        <Card  >
        <Card.Header as="h5" style={headerStyle}>Upcoming Events</Card.Header>
        {/* Row is card row */}
          <Row>
            <Col style={imageStyle}>
            {/*  This is where the image goes */}
            <Card.Img src={"https://www.google.com/logos/doodles/2021/halloween-2021-6753651837109122-law.gif"} fluid={true} alt="Card image" />
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

    </React.Fragment>
    


    
  )
    
}
// This is where the styles ares
const buttonStyle = {
    alignItems: 'center',
    float: 'left',
    backgroundColor: '#771EF7',
    padding: 10,
    
  };
  const imageStyle ={
    alignItems: 'center',
    float: 'center',
  }
const headerStyle={
    marginTop: -1,
    marginBottom:-1.5,

    backgroundColor: '#FFFF',
    color: '#000000',
}
const containerStyle ={
    padding:0,
    paddingLeft:10,
    paddingRight:10,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0, //default is 1
    shadowRadius: 0

}
const rowStyle ={
  // border:'2px solid black',
=======
const eventDescription =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\
                  fuga fugit quae quia adipisci consectetur non eaque saepe,\
                  quibusdam deleniti delectus recusandae, ipsam sint et ipsum\
                  consequatur nisi teest voluptate obcaecati.";


export default function Content() {
  return (
    <>
      <EventCard
        eventHeader
        headerText="Next Event"
        eventTitle="First event"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        eventHeader
        headerText="Upcoming Events"
        eventTitle="Second Event"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        eventTitle="Third Event"
        eventDescription={eventDescription}
      ></EventCard>
    </>
  );
>>>>>>> Stashed changes
}
