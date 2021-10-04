import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const CommentList = (props) => {
  return (
    <>
      <span>test comment</span>
      {props.comment.map((comment) => (
        <Row className="mb-2"> {comment} default test comment</Row>
      ))}
    </>
  );
};

export default CommentList;
