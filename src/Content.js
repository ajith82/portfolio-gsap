import React, { useRef, useEffect } from "react";
import "./content.css";

const Content = ({ timeline }) => {
  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);
  useEffect(() => {
    timeline.from([h1.children, pText, btn], 1, {
      opacity: 0,
      y: "100",
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    },"-=1");
  });
  return (
    <div className="content">
      <h1 className="content-inner-bold" ref={(el) => (h1 = el)}>
        <div>Hard work beats talent</div>
        <br />
        <div>when tallent doesn't work hard.</div>
      </h1>
      <p ref={(el) => (pText = el)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        feugiat felis. In id blandit arcu. Vestibulum urna sapien, molestie ut
        pulvinar ultricies, bibendum ut magna. Cras ac tincidunt nulla.
      </p>
      <button ref={(el) => (btn = el)}>Explore</button>
    </div>
  );
};

export default Content;
