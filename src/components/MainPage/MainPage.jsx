import { useEffect, useState } from "react";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import remarkGfm from "remark-gfm";
import axios from "axios";
import "./MainPage.css";
import { GiFairyWand } from "react-icons/gi";
import FunnyPlaceholder from "../FunnyPlaceholder/FunnyPlaceholder";

const MainPage = () => {
  // UseState Hooks
  const [code, setCode] = useState(` function reviewWithFeedback() {
    console.log("👨‍💻 Starting code review... Let's see what we can improve!");

    // Simulate the reviewer thoughts
    setTimeout(() => {
      console.log("🤔 Hmm, this looks good, but we can refactor it a little.");
    }, 1000);

    // Give a prompt to the developer
    setTimeout(() => {
      console.log("🔍 Reviewing: 'What if we add a try/catch block for error handling?'");
    }, 2000);

    // Conclude the review
    setTimeout(() => {
      console.log("✔️ Overall, great work! Just a couple of small tweaks.");
    }, 3000);
  }
`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [reviewBtnText, setReviewBtnText] = useState("Review");
  const [activeSection, setActiveSection] = useState("right");

  // Output code highlighting
  useEffect(() => {
    prism.highlightAll();
  }, []);

  // Api call to review code
  async function reviewCode() {
    try {
      setLoading(true); // start loading
      setAnimating(true); // start magic wand animation
      setReviewBtnText("Reviewing...");
      const response = await axios.post("https://coderevbackend.onrender.com/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => setAnimating(false)); //Stop magic wand animation
      setReviewBtnText("Review");
      setLoading(false); // stop loading
    }
  }

  return (
    <>
      <main>
        <div
          className={`left section ${activeSection === "left" ? "active" : ""}`}
          onClick={() => setActiveSection("left")}
        >
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.js, "js")
              }
              padding={10}
              style={{
                width: "100%",
                minHeight: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="reviewBtn">
            {reviewBtnText}{" "}
            <GiFairyWand
              className={`icon ${animating ? "animate" : ""}`}
              size={20}
            />
          </div>
        </div>
        <div
          className={`right section ${
            activeSection === "right" ? "active" : ""
          }`}
          onClick={() => setActiveSection("right")}
        >
          {loading ? (
            <div className="loading" />
          ) : review ? (
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {review}
            </Markdown>
          ) : (
            <FunnyPlaceholder />
          )}
        </div>
      </main>
    </>
  );
};

export default MainPage;
