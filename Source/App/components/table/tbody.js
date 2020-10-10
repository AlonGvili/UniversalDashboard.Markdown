import React from "react";
import Loader from "../loader/Loader.js";

export default function Tbody({ styles, children }) {
  return (
    <Loader>
      <tbody className="ud-markdown-table-body" style={{ ...styles }}>
        {children}
      </tbody>
    </Loader>
  );
}
