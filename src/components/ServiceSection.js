import React from "react";
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServiceSectionItem from "./ServiceSectionItem";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do UI design for websites that helps a webpage to have a unique look."
          />

          <ServiceSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />

          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile application with an eye catching UI design."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
