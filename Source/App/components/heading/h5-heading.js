import React from "react";
import styled from "styled-components";

export default function H5Tag({ children, styles }) {
  const H5 = styled.h5`
    ${styles}
  `;
  return <H5>{children}</H5>;
}
