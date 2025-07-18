import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Notessaved from "./Notessaved";

function Nav({
  notes,
  addNewNotes,
  onDeleteNote,
  activeNote,
  setActiveNote,
  showWelcome,
  showNoteButton,
  showMenu,
  setShowMenu,
}) {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  return (
    <>
      <header className="AppHeader">
        <FaBars
          size={24}
          className="hamburger-icon"
          onClick={() => setShowMenu(!showMenu)}
        />
        <p className="ethanNotesAppTitle">Ethan notes app 2025</p>
        <img src="/notesReactApp2025/logo.png" style={{ width: "30px" }}></img>
      </header>
      {showMenu && (
        <div className="FullscreenMenu">
          <button className="close-button" onClick={() => setShowMenu(false)}>
            ✕
          </button>
          <Notessaved
            showWelcome={showWelcome}
            notes={notes}
            addNewNotes={addNewNotes}
            onDeleteNote={onDeleteNote}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
            showNoteButton={showNoteButton}
          />
        </div>
      )}
    </>
  );
}

export default Nav;
