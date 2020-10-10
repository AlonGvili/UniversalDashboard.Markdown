import React from "react";
import Loader from "../loader/Loader.js";

export default function Link({ href, children, styles }) {
  return (
    <Loader>
      <a href={href} style={{ ...styles }}>
        {children}
      </a>
      ;
    </Loader>
  );
}
