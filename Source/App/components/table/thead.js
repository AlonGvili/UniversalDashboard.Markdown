import React from "react";
import Loader from "../loader/Loader.js";

export default function Thead({ styles, children }) {
  return (
    <Loader>
      <thead className="ud-markdown-table-head" style={{ ...styles }}>
        {children}
      </thead>
    </Loader>
  );
}
