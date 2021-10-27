import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 30rem;
    flex-wrap: wrap;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 1010px) {
    align-items: flex-start;
    gap: 1rem;
  }
  @media only screen and (max-width: 855px) {
    flex-flow: column wrap;
    align-self: auto; 
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = "this is title",
  items = ["HTML", "CSS", "JavaScript"],
}) {
  return (
    <AboutItemsStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemsStyles>
  );
}
