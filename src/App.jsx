import { useEffect, useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Mainnotes from "./Mainnotes";
import Notessaved from "./Notessaved";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) setActiveNote(notes[0].id);
  }, [notes]);

  const [showWelcome, setShowWelcome] = useState(true);

  function addNewNotes() {
    const newNote = {
      id: uuid(),
      title: "title",
      paragraph: "paragraph",
      date: Date.now(),
    };

    const button = document.querySelector(".btn-dark");

    button.innerHTML = "Saved!";
    setTimeout(() => {
      button.innerHTML = "Add";
    }, 2000);

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

  useEffect(() => {
    setTimeout(() => setShowWelcome(false), 1000);
  }, []);

  if (showWelcome) {
    return (
      <div className="WelcomeScreen">
        <div className="Welcome">Welcome! Let's make a new note today</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Mainnotes
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
        showWelcome={showWelcome}
      />
      <Notessaved
        showWelcome={showWelcome}
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
