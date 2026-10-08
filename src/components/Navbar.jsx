import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {}
        <a href="#home" className="brand" onClick={closeMenu}>
          <img
          src={`${import.meta.env.BASE_URL}assets/logo-text.png`}
          alt="Dev Stack" />
          </a>

        {}
        <nav className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#home" className="active" onClick={closeMenu}>
            Home
          </a>

          <a href="#technologies" onClick={closeMenu}>
            Technologies
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {}
        <div className="nav-actions">
          <button className="signin-btn">
            Sign In
          </button>

          <button className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;