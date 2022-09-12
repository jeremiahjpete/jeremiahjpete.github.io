import React, { useState } from "react";
import "./Header.css";
import Modal from "react-modal";

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    // TODO: Replace name button with logo design
    <header className="Header">
      <button className="Home" href="/" onClick={logNameClick}>
        Jeremiah Pete
      </button>
      <nav className="Nav">
        <button className="About" href="/" onClick={() => setModalIsOpen(true)}>
          About Me
        </button>
        <Modal isOpen={modalIsOpen}>
          <h2>Modal Screen</h2>
          <button href="/" onClick={() => setModalIsOpen(false)}>Exit</button>
        </Modal>
      </nav>
    </header>
  );
}

function logNameClick() {
  return console.log("Name button was clicked!");
}

export default Header;
