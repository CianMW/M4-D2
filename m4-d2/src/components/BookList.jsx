import books from "../Data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    BookSearch: "",
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                Search for a book
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              placeholder="Book Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) =>
                this.setState({ BookSearch: e.currentTarget.value })
              }
              value={this.state.BookSearch}
            />
          </InputGroup>
        </Row>
        <Row className="justify-content-center">
          {books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.BookSearch.toLocaleLowerCase())
            )
            .map((book) => (
              <SingleBook book={book} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;