import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Hello world!</h1>
      <Card  userName={"Chandan"} btnText="click me"/>
      <Card  userName={"tanuja"}/>
    </>
  );
}

export default App;
