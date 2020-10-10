import React from "react";
import Loader from "../loader/Loader.js";

export default function Image({ src, alt, title, styles }) {
  return (
    <Loader>
      <img
        className="ud-markdown-img"
        style={{ ...styles }}
        src={src}
        title={title}
        alt={alt}
      />
    </Loader>
  );
}
