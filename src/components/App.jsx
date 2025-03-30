import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = React.useState([]);
  const [input, setInput] = React.useState({
    heading: "",
    text: ""
  });


  function addNote(){
    setNote((prevNotes)=>{
      return [...prevNotes, input]
    })
    setInput({ heading: "", text: "" });
  }

  function handleChange(event){
    const {name, value} = event.target;
    setInput(prevValue=>{
      if (name === "title"){
        return {
          heading: value,
          text: prevValue.text
        }
      }else if (name === "content"){
        return {
          heading: prevValue.heading,
          text: value
        }
      }
    })
  }

  function deleteItem(id){
    setNote((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} onInput={handleChange} input={input}/>
      {notes.map((note, index)=>{
        return <Note key={index} title={note.heading} content={note.text} deleteItem={deleteItem} id={index}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
