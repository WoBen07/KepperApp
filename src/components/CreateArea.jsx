import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.onInput} value={props.input.heading}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.onInput} value={props.input.text}/>
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
