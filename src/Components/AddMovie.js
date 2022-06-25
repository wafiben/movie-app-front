import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const styleForm = { width: "50%", margin: "auto" };

function AddMovieForm({AddMovie}) {
  const [movie, setMovie] = useState({ title: "", rate: "", poster: "" });
  const handleChange=(event)=>{
    setMovie({...movie,[event.target.id]:event.target.value})

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    AddMovie(movie);
    setMovie({ title: "", rate: "", poster: "" })
}

  return (
    <Form style={styleForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={movie.title}
          onChange={handleChange}
          id='title'
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>rate</Form.Label>
        <Form.Control type="text" placeholder="rate" value={movie.rate} 
        id='rate'
        onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="image" value={movie.poster} 
        id='poster'
        onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddMovieForm;
