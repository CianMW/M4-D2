import books from "../Data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class NewestReleases extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          {books.map((book) => (
            <Col xs={4} md={2} key={book.asin}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover", width: "100%", height: "vh" }}
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default NewestReleases;
