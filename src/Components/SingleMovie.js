import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const styleCard = { marginTop: "40px" };

function SingleMovie({ movie }) {
  return (
    <div style={styleCard}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
            <h4>rate :{movie.rate}</h4>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleMovie;
