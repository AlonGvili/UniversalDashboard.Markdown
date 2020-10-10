import React from "react";
import styled from "styled-components";

export default function H1Tag({ children, styles }) {
  const H1 = styled.h1`
    ${styles}
  `;
  return <H1>{children}</H1>;
}
