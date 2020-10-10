import React from "react";
import Loader from "../loader/Loader.js";

export default function Tcell({ styles, children }) {
  return (
    <Loader>
      <td className="ud-markdown-table-cell" style={{ ...styles }}>
        {children}
      </td>
    </Loader>
  );
}
