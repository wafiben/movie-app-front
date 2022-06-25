import React,{useState} from "react";
import SingleMovie from "./SingleMovie";

const styleDivContent = {
  display: "flex",
  justifyContent: "space-around",
  margin: "auto",
  flexWrap: "wrap",
  paddingTop: "200px",
};
function ListOfMovie({ list }) {
  const [caracter, setCaracter] = useState("");
  const handleChange = (e) => {
    setCaracter(e.target.value);
    
  };
  return (
    <div style={styleDivContent}>
      <div>
        <input placeholder="search" onChange={handleChange} style={{margin:'auto'}} />
      </div>
      {list.filter(elt=>elt.title.includes(caracter)).map((elt, index) => (
        <SingleMovie key={index} movie={elt} />
      ))}
    </div>
  );
}

export default ListOfMovie;
