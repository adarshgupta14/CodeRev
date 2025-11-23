import "./LandingPage.css";

export default function LandingPage({ toggle }) {
  return (
    <div className="lp-wrapper dark">

      {/* NAVBAR */}
      <header className="lp-navbar">
        <div className="lp-logo">🔥 CodeRev AI</div>

        <nav className="lp-nav-links">
          <a href="#about">About</a>
          <a href="#why">Why Us</a>
          <a href="#profiles">Socials</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-content">
          <h1 className="lp-title">
            Your Code. <span className="highlight">Roasted.</span> 🔥
          </h1>

          <p className="lp-desc">
            A next-gen AI that reviews, critiques, explains & improves your code.
            Smart, funny, and brutally honest.
          </p>

          <div className="lp-buttons">
            <button className="lp-btn primary" onClick={toggle}>
              🚀 Go to App
            </button>

            <a href="#about" className="lp-btn secondary">
              Learn More
            </a>
          </div>
        </div>

        {/* Floating Animation */}
        <div className="lp-hero-graphic">
          <div className="circle"></div>
          <div className="circle2">
            <img src="./logo3.png" alt="" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="lp-section">
        <h2>🤖 About The AI</h2>
        <p>
          CodeRev AI analyzes your code with high-level reasoning.  
          It detects bugs, suggests improvements, cleans structure, and even roasts bad logic —
          all while teaching you better patterns.
        </p>
      </section>

      {/* WHY US */}
      <section id="why" className="lp-section">
        <h2>✨ Why Choose CodeRev?</h2>

        <div className="lp-features">
          <div className="lp-card">
            <h3>🔥 Brutally Honest</h3>
            <p>It doesn't sugarcoat — it *fixes* your code.</p>
          </div>
          <div className="lp-card">
            <h3>⚡ Super Fast</h3>
            <p>Instant reviews powered by modern large-language models.</p>
          </div>
          <div className="lp-card">
            <h3>🎯 Developer Friendly</h3>
            <p>Readable, practical, and clear explanations.</p>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section id="profiles" className="lp-section">
        <h2>🌐 Connect With Me</h2>

        <div className="lp-socials">
          <a href="https://github.com/adarshgupta14" target="_blank">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/adarshgupta04/" target="_blank">💼 LinkedIn</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        © 2025 CodeRev AI — Built by Adarsh Gupta 💻🔥
      </footer>
    </div>
  );
}
