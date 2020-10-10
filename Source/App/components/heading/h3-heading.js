import React from "react";
import styled from "styled-components";

export default function H3Tag({ children, styles }) {
  const H3 = styled.h3`
    ${styles}
  `;
  return <H3>{children}</H3>;
}
