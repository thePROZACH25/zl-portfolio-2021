import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText(props) {
  return (
    <PStyle>
      <p>{props.children}</p>
    </PStyle>
  );
}
