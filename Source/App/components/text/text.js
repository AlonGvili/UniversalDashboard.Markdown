import React from "react";
import Loader from "../loader/Loader.js";

export default function Text({ styles, children }) {
  return (
    <Loader>
      <text className="ud-markdown-text" style={{ ...styles }}>
        {children}
      </text>
    </Loader>
  );
}
