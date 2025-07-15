function Mainnotes({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      date: Date.now(),
    });
  };

  if (!activeNote) return <div>No note selected</div>;

  return (
    <div className="Mainnotes left-column">
      <h1>New Note</h1>
      <div className="Inputboxes">
        <input
          type="text"
          className="Inputarea form-control"
          placeholder="Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <textarea
          className="Inputarea form-control"
          placeholder=""
          value={activeNote.paragraph}
          onChange={(e) => onEditField("paragraph", e.target.value)}
        ></textarea>
      </div>

      <div className="Mynote">
        <h1>{activeNote.title}</h1>
        <p>{activeNote.paragraph}</p>
      </div>
    </div>
  );
}

export default Mainnotes;
