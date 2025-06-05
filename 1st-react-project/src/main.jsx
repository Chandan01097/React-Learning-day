import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function My_data() {
  return (
    <div>
      <h1> Hii this is 2nd day of learning react </h1>
    </div>
  );
}
const Google = () => {
  return (
    <a href="https://www.google.com/" target="_blank">
      Visit Google
    </a>
  );
};


createRoot(document.getElementById("root")).render(
  
  <Google />
);
