
import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
    state = {
        selected: false ,
        Visible: true,
        book: this.props.book
       
    }

    
    render () {
  return (
    <div className="d-flex justify-content-center">
      {/*  {console.log(this.state.book)} 
       {console.log("this is the Asin" + this.state.book.asin)} */}
      <Card
        key={this.props.book.asin}
        className="m-3 d-flex justify-content-center"
            onClick={(e) => this.setState({ selected: !this.state.selected })}
            style={{ width: "20rem", height: "400px", backgroundColor: this.state.selected ? 'LightGrey' : 'transparent' ,border: this.state.selected ? '2px solid green' : 'none' }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="justify-content-center align-items-center mx-auto"
          style={{ width: "80%", height: "15rem" }}
        />
        <Card.Body className="pt-2 my-auto">
          <Card.Title >{this.props.book.title}</Card.Title>
        </Card.Body>

        
      </Card>
      {this.state.selected && <CommentArea bookAsin={this.state.book.asin} />}
    </div>
        );
    };
}


export default SingleBook;