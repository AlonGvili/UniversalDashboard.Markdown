import React from "react";
import Loader from "../loader/Loader.js";

export default function List({ children, styles, isOrdered }) {
  return (
    <Loader>
      {isOrdered ? (
        <ol className="ud-markdown-list-ol" style={{ ...styles }}>
          {children}
        </ol>
      ) : (
        <ul className="ud-markdown-list-ul" style={{ ...styles }}>
          {children}
        </ul>
      )}
    </Loader>
  );
}
