import React from "react";
import styled from "styled-components";

export default function H2Tag({ children, styles }) {
  const H2 = styled.h2`
    ${styles}
  `;
  return <H2>{children}</H2>;
}
