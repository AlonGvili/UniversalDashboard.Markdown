import React from "react";
import Loader from "../loader/Loader";
import styled from "styled-components";

export default function Paragraph({ children, styles }) {
  const P = styled.p`
    ${styles}
  `;
  return (
    <Loader>
      <P className="ud-markdown-paragraph">{children}</P>
    </Loader>
  );
}
