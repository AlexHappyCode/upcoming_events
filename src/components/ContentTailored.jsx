import react from 'react';
import {useLocation} from 'react-router-dom';
import{Container,Row, Col,} from "react-bootstrap";
export default function ContentTailored(){
    const location = useLocation();
    return (

        <Container fluid>
           <Row>
        <h1 fluid>{location.state.title}</h1>
        <h1 fluid>{location.state.date}</h1>
        <img src = {location.state.picture} fluid></img>
        <h1 fluid>{location.state.body}</h1>
            </Row>
        </Container>

        
    )
}