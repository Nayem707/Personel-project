import { Card, Col, Row } from 'react-bootstrap';
const Cards = () => {
  return (
    <Row xs={1} md={2} className='g-4'>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant='top' src='image/ui.png' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <button class='btn'>Sign Up</button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
