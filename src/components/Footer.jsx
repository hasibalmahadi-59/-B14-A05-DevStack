function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src="/assets/logo-text.png" alt="Dev Stack" />
            </a>

            <p>
              Build your ideal development stack by exploring technologies,
              comparing options, and choosing the tools that fit your project.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-column">
            <h3>Product</h3>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#home">Features</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Support</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;