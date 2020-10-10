import React from "react";
import Loader from "../loader/Loader.js";
// import styled from "styled-components";

export default function ListItem({ children, styles }) {
  return (
    <Loader>
      <li className="ud-markdown-list-item" style={{ ...styles }}>
        {children}
      </li>
    </Loader>
  );
}
