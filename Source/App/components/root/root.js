import React from "react";
import Loader from "../loader/Loader.js";

export default function Root({ children, styles }) {
  return (
    <Loader>
      <article className="ud-markdown-root" style={{ ...styles }}>
        {children}
      </article>
    </Loader>
  );
}
