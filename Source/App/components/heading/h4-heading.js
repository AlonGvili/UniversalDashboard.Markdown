import React from "react";
import styled from "styled-components";

export default function H4Tag({ children, styles }) {
  const H4 = styled.h4`
    ${styles}
  `;
  return <H4>{children}</H4>;
}
