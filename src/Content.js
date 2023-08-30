import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <h1 className="content-inner-bold">
        <div>Hard work beats talent</div>
        <br />
        <div>when tallent doesn't work hard.</div>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        feugiat felis. In id blandit arcu. Vestibulum urna sapien, molestie ut
        pulvinar ultricies, bibendum ut magna. Cras ac tincidunt nulla.
      </p>
      <button>Explore</button>
    </div>
  );
};

export default Content;
