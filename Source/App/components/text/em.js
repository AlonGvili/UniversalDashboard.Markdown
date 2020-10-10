import React from "react";
import styled from "styled-components";
import Loader from "../loader/Loader.js";

export default function Emphasis({ styles, value }) {
  const Em = styled.em`
    ${styles}
  `;
  return (
    <Loader>
      <Em>{value}</Em>
    </Loader>
  );
}
