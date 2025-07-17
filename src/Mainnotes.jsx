import { useState } from "react";

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

  const [placeholder, setPlaceholder] = useState("Type title here");

  const [paragraphPlaceholder, setParagraphPlaceholder] =
    useState("Start paragraph");

  if (!activeNote)
    return (
      <div className="WelcomeDiv">
        <h1 className="WelcomeTitle">Welcome add a new note below</h1>
      </div>
    );

  return (
    <div className="Mainnotes left-column">
      <div className="Inputboxes">
        <input
          type="text"
          className="Inputarea form-control titleDefault "
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceholder("")}
          onBlur={(e) => {
            if (e.target.value === "") setPlaceholder("Type title here");
          }}
        />
        <textarea
          className="Inputarea form-control paragraphDefault"
          placeholder={paragraphPlaceholder}
          onFocus={() => setParagraphPlaceholder("")}
          onBlur={(e) => {
            if (e.target.value === "")
              setParagraphPlaceholder("start paragraph");
          }}
          value={activeNote.paragraph}
          onChange={(e) => onEditField("paragraph", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default Mainnotes;
