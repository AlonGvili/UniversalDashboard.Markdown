import React from "react";
import Loader from "../loader/Loader.js";

export default function H6Tag({ children, styles }) {
  return (
    <Loader>
      <h6 style={{ ...styles }}>{children}</h6>;
    </Loader>
  );
}
