import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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

  let [triger, setTriger] = useState(false);

  let Triger = () => {
    return setTriger(true);
  };

  return (
    <div>
      <form className="create-note">
        {triger && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <Zoom in={true}>
          <textarea
            onClick={Triger}
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={triger ? 3 : 0}
          />
        </Zoom>
        <Zoom in={triger}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
