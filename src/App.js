import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';




function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
