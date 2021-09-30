
import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
    constructor(props){
        super(props)
    }
    state = {
        selected: false ,
        Visible: true
       
    }

    
    render () {
  return (
    <div className="d-flex justify-content-center">
      {/* {console.log(this.props)} */}
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

        { this.state.selected && <CommentArea bookAsin={this.props.book} />} 
      </Card>
     
    </div>
        );
    };
}


export default SingleBook;