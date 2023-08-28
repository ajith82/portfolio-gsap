import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <Header />
      <div className="container">
        <Content />
      </div>
    </div>
  );
}

export default App;
