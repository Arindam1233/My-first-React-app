import React, { useState } from "react";
import "./styles.css"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';
function CreateArea(props) {
 const[bool,setBool] = useState(false);


  function Output(){
    setBool(true)
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       {bool? <Zoom in={true}><input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /></Zoom>
        :null}
        
       <textarea

          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={Output}
          placeholder={bool?"Take a note...":"Take a note"}
          rows={bool?"3":"1"}
        /> 
        <Zoom in={bool}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
