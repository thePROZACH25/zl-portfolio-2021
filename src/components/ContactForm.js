import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const FormStyled = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  #button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    border: none;
    outline: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4nda4qf",
        "template_1n2p0zk",
        e.target,
        "user_bhizQcjbeKcqZf2EVau8r"
      )
      .then(
        (result) => {
          alert("You Message Has Been Sent. Thank You!")
          console.log("You got mail", result.text);
        },
        (error) => {
          alert('Message did not send. Please try again.')
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <FormStyled>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input type="text" name="user_name" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input type="email" name="user_email" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your Message
              <textarea name="user_message" />
            </label>
          </div>
          <input id="button" type="submit" value="Send" />
        </form>
      </FormStyled>
    </div>
  );
}
