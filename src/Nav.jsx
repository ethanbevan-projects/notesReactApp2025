import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="AppHeader">
        <FaBars
          size={24}
          className="hamburger-icon"
          onClick={() => setShowMenu(!showMenu)}
        />
        <h2>Notes App</h2>
      </header>
      {showMenu && (
        <div className="FullscreenMenu">
          <button className="close-button" onClick={() => setShowMenu(false)}>
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default Nav;
