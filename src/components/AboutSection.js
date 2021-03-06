import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.png";

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        tex-align: left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex: 1;
    }
    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 958px){
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right{
        width: 100%;
    }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0;
            .button-wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am a front end and UI developer from Jefferson City, Tennessee. I
            passion for creating websites. I have a love for
            photography, sim racing, and always try to show unique views to the
            audience through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works"></Button>
            <Button btnLink="/about" btnText="Read More" outLine></Button>
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="Zach working" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
