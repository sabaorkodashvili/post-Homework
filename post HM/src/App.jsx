import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [post, setPost] = useState([]);
  const handLeNewpost = (event) => setInputValue(event.target.value);
  const click = (e) => setInputValue(e.target.value);

  const [outputValue, setOutputValue] = useState("");
  const handleInputKeyPress = (e) => {
    const date = { inputValue };
    if (e.key === "Enter") {
      setOutputValue(inputValue);
      setPost((Is) => [...Is, date]);
      setInputValue("");
    }
  };

  const handleDelete = (deletingPost) => {
    const newPost = post.filter((post) => post != deletingPost);
    setPost(newPost);
  };

  return (
    <div>
      <div className="postDiv">
        <form onSubmit={handleInputKeyPress}></form>
        <input
          className="yellowInput"
          type="text"
          value={inputValue}
          onChange={click}
          placeholder="New Post"
          onKeyPress={handleInputKeyPress}
        />
        <div className="postLength">
          <p>number of post- {post.length}</p>
          <p>number of post length- {inputValue.length}</p>
        </div>
      </div>
      <ul className="ul">
        {post.map((post, index) => (
          <div>
            <li key={index} className="posts">
              {post.inputValue}{" "}
              <button onClick={() => handleDelete(post)} className="closeBtn">
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default App;
