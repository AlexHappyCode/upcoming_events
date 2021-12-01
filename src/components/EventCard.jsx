import { render } from "@testing-library/react";
import { Container, CardGroup, Card, Row, Col, Button } from "react-bootstrap"
import { Router,Route, Routes,useNavigate, Link } from 'react-router-dom';
import ContentTailored from './ContentTailored'

export default function EventCard(props) {
  
  
  const navigate = useNavigate();
  const toComponentB=()=>{
    navigate('/ContentTailored',{state:{body:props.eventDescription,date: props.date,title: props.eventTitle,picture:props.eventPicture}});
      }
  <Router>
            <Routes>
                <Route path="/ContentTailored" element={<ContentTailored />} />
            </Routes>
            </Router>
  let picture = props.eventPicture;          
  return (
    <Container>
      <CardGroup>
        <Card>
          <Row>
            <Col>
            {
              //If header is in element, it will output
              props.header&&
              <Card.Header as="h5">{props.eventHeader}</Card.Header>
            }
              <Card.Img
                src={(picture)}
                fluid={true}
                alt="Card image"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>{props.date}</Card.Text>
                <Card.Title as="h2">{props.eventTitle}</Card.Title>
                <Card.Text as="h4">{props.eventDescription}</Card.Text>
                <div id="button">
                <button onClick={()=>{toComponentB()}}></button>

                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
}

