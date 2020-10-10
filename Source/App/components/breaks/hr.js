import React from "react";
import Loader from "../loader/Loader.js";

export default function Hr({ styles, children }) {
  return (
    <Loader>
      <hr className="ud-markdown-hr" style={{ ...styles }}>
        {children}
      </hr>
    </Loader>
  );
}
