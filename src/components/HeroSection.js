import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/DE640214-378F-4B20-BAE7-6BD2D436E181_1_201_a.jpeg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import PText from "./PText";
import Button from "./Button";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
    p {
      color: var(--white);
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color: var(--sandy);
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__indicator {
    p {
      color: var(--sandy);
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          color: var(--sandy);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
      p {
        color: var(--gray-1);
      }
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Frontend Developer / UI Developer</span>
            <span className="hero__name">Zachary Ledford</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="Zachary Ledford Profile" />
          </div>
          <div className="hero__info">
            <PText>
              I am a frontend web designer and UI developer. I love to design
              and make new web experiences for the people.
            </PText>
            <Button
              btnLink="/projects"
              btnText="see my works"
              outLine={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  {/* Instagram Link */}
                  <a
                    href="https://www.instagram.com/theprozach/"
                    target="_blank"
                    rel="noreffer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  {/* GitHub Link */}
                  <a
                    href="https://github.com/thePROZACH25"
                    target="_blank"
                    rel="noreffer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  {/* LinkedIn Link */}
                  <a
                    href="https://linkedin.com/in/zacharyledford"
                    target="_blank"
                    rel="noreffer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
