function Mainnotes({ activeNote, onUpdateNote, showWelcome }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      date: Date.now(),
    });

    document
      .querySelector(".right-column")
      .scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!activeNote) return null;

  return (
    <div className="Mainnotes left-column">
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
    </div>
  );
}

export default Mainnotes;
