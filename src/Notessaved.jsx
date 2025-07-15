function Notessaved({
  notes,
  addNewNotes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="Notessaved right-column">
      <h1>Saved</h1>

      {notes.map((note, index) => (
        <div
          className={`Savednotes ${note.id === activeNote && "active"}`}
          key={index}
          onClick={() => setActiveNote(note.id)}
        >
          <h2>{note.title}</h2>
          <p>{note.paragraph && note.paragraph.substr(0, 100) + "..."}</p>
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
        <button className="btn btn-dark" onClick={addNewNotes}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Notessaved;
