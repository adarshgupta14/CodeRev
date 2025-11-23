import "./FunnyPlaceholder.css";

export default function FunnyPlaceholder() {
  return (
    <div className="placeholder-container">
      <div className="floating-emoji">🧑‍💻🔥</div>

      <div className="placeholder-text">
        <span>This space is empty...</span>
        <span className="blink">|</span>
      </div>

      <p className="subtitle">Drop some code here so I can roast it 😄🔥</p>
    </div>
  );
}
