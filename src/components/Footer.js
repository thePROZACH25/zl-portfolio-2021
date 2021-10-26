import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright{
      background-color: var(--dark-bg);
      text-align: left;
      padding: 1rem 0;
      margin-top: 5rem;
      .para{
          margin-left: 0;
      }
  }
  @media only screen and (max-width: 768px){
      .container{
          flex-direction: column;
          gap: 0rem;
          & > div{
              margin-top: 5rem;
          }
      }
      .footer__col1 .para{
        max-width: 100%;
      }
      .copyright{
          .container{
              div{
                  margin-top: 0rem;
              }
          }
      }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Zachary Ledford</h1>
          <PText>
            I am a frontend web designer and UI developer from Jefferson City,
            Tennessee. I love to design and make new web experiences for the
            people.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+1(865)850-3625",
                path: "tel: +1(865)850-3625",
              },
              {
                title: "zach.s.ledford@gmail.com",
                path: "mailto: zach.s.ledford@gmail.com",
              },
              {
                title: "Jefferson City, Tennessee, USA",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com",
              },
              {
                title: "Instagram",
                path: "http://instagram.com",
              },
              {
                title: "Twitter",
                path: "http://twitter.com",
              },
              {
                title: "GitHub",
                path: "http://github.com/thePROZACH25",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
          <div className="container">
          <PText>
            © 2021 - Zachary S. Ledford | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://github.com/thePROZACH25">
              Zachary S. Ledford
            </a>{' '}
          </PText>
          </div>
      </div>
    </FooterStyles>
  );
}
