import { Component } from "react";



class CommentArea extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        comment: ""

    }

    //How to pass the server data to the children components
    // you are going to to a request
    // if the request is ok you need to store this data in a component STATE
    // if the component STATE has 1 element or more you want to display the element

    //How to show/display the data 
    // from the State you are going to perform a map
    // this.state.booksComments.map(book=> <Comment key={book._id} book={book}/>)

    //This fetches the comments

    componentDidMount = async () => {
        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzIzMTI3MjgsImV4cCI6MTYzMzUyMjMyOH0.1mHsb-t2ReuCs2WsyDFcnIoddjZMG44_rc-BM_Catno"
              }
            }
          );
         ;
            let comments = await response.json();
             console.log(comments)
            this.setState({ comment: comments});
          
        } catch (err) {
          console.log("error! with fetch");
        }
      };




    render () {


        return(
            <span >{this.state.comment}</span>
        )
    }
    
}

export default CommentArea