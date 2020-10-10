import React from "react";
import Loader from "../loader/Loader.js";

export default function Trow({ styles, children }) {
  return (
    <Loader>
      <tr className="ud-markdown-table-row" style={{ ...styles }}>
        {children}
      </tr>
    </Loader>
  );
}
