function Notessaved({
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
  const sortedNotes = notes.sort((a, b) => b.date - a.date);

  if (notes.length === 0) {
    return (
      <>
        <div className="Notessaved right-columnWelcome">
          <h1 className="WelcomeSaved">Saved notes will be here</h1>
        </div>

        <div className="Sidenotes fixed-bottom">
          <button className="btn btn-dark" onClick={addNewNotes}>
            Add new note
          </button>
          <span className="savedTitle">Saved</span>
        </div>
      </>
    );
  }

  return (
    <div
      className="Notessaved right-column"
      style={{ marginTop: notes.length > 2 ? 75 : "0px" }}
    >
      {sortedNotes.map((note, index) => (
        <div
          className={`Savednotes ${note.id === activeNote && "active"}`}
          key={index}
          onClick={() => setActiveNote(note.id)}
        >
          <h2>{note.title === "" ? "Your title" : note.title}</h2>
          <p>
            {note.paragraph === ""
              ? "Your paragraph"
              : note.paragraph && note.paragraph.substr(0, 100) + ""}
          </p>
          <p className="Dateimported">
            {new Date(note.date).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <button
            onClick={() => onDeleteNote(note.id)}
            className="btn btn-light btnspacing"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="Sidenotes fixed-bottom">
        {showNoteButton && (
          <>
            <button className="btn btn-dark" onClick={addNewNotes}>
              Add new note
            </button>
            <span className="savedTitle">Saved</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Notessaved;
