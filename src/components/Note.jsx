import React from "react";
import "./styles.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Zoom from '@mui/material/Zoom';
import Grow from '@mui/material/Grow';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}> 
    <div className="note">
      
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <button onClick={handleClick}><DeleteOutlineIcon /></button>
      </Zoom>
    </div>
    </Zoom>
  );
}

export default Note;
