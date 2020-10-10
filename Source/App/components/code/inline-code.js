import React from "react";
import Loader from "../loader/Loader.js";

export default function InlineCode({ children, styles }) {
  return (
    <Loader>
      <code style={{ ...styles }}>{children}</code>;
    </Loader>
  );
}
