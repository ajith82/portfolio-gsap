import React from "react";
import { gsap, Power3 } from "gsap";
import Header from "./Header";
import Content from "./Content";
import Images from "./Images";
import "./App.css";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="hero">
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Content timeline={tl} />
        <Images timeline={tl} ease={ease} />
      </div>
    </div>
  );
}

export default App;
