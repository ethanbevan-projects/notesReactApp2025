import { useEffect, useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Mainnotes from "./Mainnotes";
import Notessaved from "./Notessaved";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNewNotes() {
    const newNote = {
      id: uuid(),
      title: "title",
      paragraph: "paragraph",
      date: Date.now(),
    };

    document.querySelector(".savedTitle").style.display = "block";

    setNotes([...notes, newNote]);
    setActiveNote(newNote.id);
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (currentNoteID) => {
    setNotes(notes.filter((note) => note.id !== currentNoteID));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Mainnotes activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      <Notessaved
        notes={notes}
        addNewNotes={addNewNotes}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
    </div>
  );
}

export default App;
