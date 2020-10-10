import React from "react";
import styled from "styled-components";
import Loader from "../loader/Loader.js";

export default function Delete({ styles, children }) {
  const Del = styled.del`
    ${styles}
  `;
  return (
    <Loader>
      <Del>{children}</Del>;
    </Loader>
  );
}
