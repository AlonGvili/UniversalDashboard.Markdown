import React from "react";
import Loader from "../loader/Loader.js";

export default function Strong({ styles, children }) {
  return (
    <Loader>
      <strong className="ud-markdown-strong" style={{ ...styles }}>
        {children}
      </strong>
    </Loader>
  );
}
