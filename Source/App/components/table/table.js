import React from "react";
import Loader from "../loader/Loader.js";

export default function Table({ styles, children }) {
  return (
    <Loader>
      <table className="ud-markdown-table" style={{ ...styles }}>
        {children}
      </table>
    </Loader>
  );
}
