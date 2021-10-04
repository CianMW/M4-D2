import { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
  comment: { 
      comment: "",
      rate: 0,
      elementId: this.props.asin
    }
  };



  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzMzNTEzMzYsImV4cCI6MTYzNDU2MDkzNn0.foBYQppbMwHt27xv85g0bJnIlqqfTxEZYvCMtHGy918"          }
        }
      );
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
    console.log("here is the state: "+ this.state.comment.rate)
  };


  render() {
    return (
      <Form onSubmit={this.sendComment}>
          {console.log("ADD COMMENTS LOG: " + this.state.comment.elementId)}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Tell the world:</Form.Label>
          <Form.Control
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value
                }
              })
            }
            as="textarea"
            placeholder="This book was ..."
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            value={this.state.comment.rating}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value
                }
              })
            }
            as="select"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Comment!</Button>
      </Form>
    );
  }
}

export default AddComment;
