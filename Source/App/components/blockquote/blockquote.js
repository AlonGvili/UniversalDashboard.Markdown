import React from "react";
import Loader from "../loader/Loader.js";

export default function Blockquote({ children, styles }) {
  return (
    <Loader>
      <blockquote
        className="ud-markdown-blockquote"
        style={{ ...styles }}
      >
        {children}
      </blockquote>
    </Loader>
  );
}
