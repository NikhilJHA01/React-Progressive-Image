import "./styles.css";
import tiny from "./images/tiny.jpg";
import large from "./images/large.jpg";
import ProgressiveImage from "./ProgressiveImage";

export default function App() {
  return (
    <div className="App">
      <h1>Progressive Image</h1>
      <ProgressiveImage
        height={"300"}
        width={"300"}
        placeholder={tiny}
        src={large}
      />
    </div>
  );
}
