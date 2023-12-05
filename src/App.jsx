import { useState } from "react";
import JSConfetti from "js-confetti";
import "./index.css";

function App() {
  const [wait, setWait] = useState(true);
  const jsConfetti = new JSConfetti();

  const handleConfetti = async () => {
    setWait(false);
    await jsConfetti
      .addConfetti({
        emojis: ["🍎", "👍", "🤔", "👀", "✋"],
        emojiSize: 80,
        confettiNumber: 55,
      })
      .then(() => setWait(true));
  };

  return (
    <div id="content">
      <h1>안녕</h1>
      <p>
        <b>Lorem ipsum </b> dolor sit,
        <br /> amet consectetur adipisicing elit. Est non nemo quae dolor dolore
        aperiam accusamus, harum, modi mollitia cum explicabo, corporis quas
        inventore. Nesciunt quam eius corporis repudiandae possimus.
      </p>
      <button disabled={!wait} onClick={handleConfetti}>
        {wait ? "눌러봐" : "기다려"}
      </button>
    </div>
  );
}

export default App;
