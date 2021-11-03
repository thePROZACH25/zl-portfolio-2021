import React from "react";
import Button from "../components/Button";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border: 2px solid var(--sandy);
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Zachary Ledford</span>
            </p>
            <h2 className="about__heading">A Frontend Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from Jefferson City, Tennessee. A place of beauty, nature
                and small town charm. Since my childhood, I've loved art and
                design. I always tried to design stuff with my unique point of
                view. I also love to create things that can be useful to others.
                <br /> <br />
                I started coding later in life as a career change but coding has
                now became an art for me. I love it and now I have the
                opportunity to design along with the coding. I find it really
                interesting and I enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good products that helps the world to become a
                better place.
              </PText>
            </div>
            <Button btnText="Download Resume" btnLink='#' />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Zach Ledford Img" />
          </div>
        </div>
        <div className="about__info__items">
          {/* Skills */}
          {/* ////////////////// */}
          <div className="about__info__item">
            <h1 className="about__info__heading">My skills</h1>
            <AboutInfoItem
              title="Languages"
              items={["HTML5", "CSS3", "Javascript", "JQuery", "Java"]}
            />
            <AboutInfoItem
              title="Web Frameworks"
              items={[
                "React",
                "BootStrap",
                "Material.UI",
                "Handlebars",
                "Express",
                "Node",
              ]}
            />
            <AboutInfoItem
              title="Other Skills"
              items={[
                "VS Code",
                "Figma",
                "SQL",
                "Git/GitHub",
                "Mongo",
                "API’s",
                "SQL",
                "FireBase",
                "Stripe",
              ]}
            />
          </div>
          {/* Schools */}
          {/* ////////////////// */}
          <div className="about__info__item">
            <h1 className="about__info__heading">Eduction</h1>
            <AboutInfoItem
              title="Certification"
              items={[
                "Vanderbult Full Stack Web Development Bootcamp, Nashville, TN",
              ]}
            />
            <AboutInfoItem
              title="School"
              items={["Jefferson County High School, Dandridge, TN"]}
            />
          </div>

          {/* Work Experience */}
          {/* ////////////////// */}
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="2016-2021"
              items={[
                "Banana Republic Factory Store | Lead of Daily Operations",
              ]}
            />
            <AboutInfoItem
              title="2014-2016"
              items={["Gap Factory Store | Mens’s Department Sectional Leader"]}
            />
            <AboutInfoItem
              title="2008-2014"
              items={[
                "TN Smokies Baseball Stadium | Food & Beverage Merchandiser",
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
