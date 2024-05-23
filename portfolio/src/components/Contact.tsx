import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_keq5987", "template_9u54taa", form.current, {
          publicKey: "nkyM8xFHnXeh_0TnB",
        })
        .then(
          (result) => {
            console.log("SUCCESS!");
            console.log(result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form ref is null.");
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact-section" className="section-container">
      <div className="contact-img grid-col-span-2"></div>
      <form
        ref={form}
        className="contact-form grid-col-span-2"
        onSubmit={sendEmail}
      >
        <h2 className="contact-heading">Contact Me</h2>
        <input
          id="name-input"
          name="user_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="form-input"
          placeholder="Name"
          required
        />
        <label htmlFor="name-input" className="form-label">
          Name:
        </label>
        <input
          id="email-input"
          name="user_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="form-input"
          placeholder="Email"
          required
        />
        <label htmlFor="email-input" className="form-label">
          Email:
        </label>
        <textarea
          id="message-input"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="form-input"
          placeholder="Message"
          required
        />
        <label htmlFor="message-input" className="form-label">
          Message:
        </label>
        <button id="submit-button" className="button" type="submit">
          Submit
        </button>
      </form>
      <div className="contact-details">
        <h3 className="details-heading">Contact Details</h3>
        <div className="detail">
          <span id="email-icon" className="contact-icon">
            <MailOutlineIcon />
          </span>
          <p id="email" className="detail-info">
            aleabalda.work@gmail.com
          </p>
        </div>
        <div className="detail">
          <span id="phone-icon" className="contact-icon">
            <PhoneInTalkOutlinedIcon />
          </span>
          <p id="phone" className="detail-info">
            (403)-760-4930
          </p>
        </div>
        <div className="detail">
          <span id="location-icon" className="contact-icon">
            <LocationOnOutlinedIcon />
          </span>
          <p id="location" className="detail-info">
            Calgary, AB, Canada
          </p>
        </div>
      </div>
      <div className="contact-socials">
        <h3 className="socials-heading">Contact Socials</h3>
        <div className="social">
          <span id="github-icon" className="contact-icon">
            <GitHubIcon />
          </span>
          <a
            id="github"
            className="social-info"
            href="https://github.com/aleabalda"
            target="_blank"
          >
            aleabalda
          </a>
        </div>
        <div className="social">
          <span id="linkedin-icon" className="contact-icon">
            <LinkedInIcon />
          </span>
          <a
            id="linkedin"
            className="social-info"
            href="https://www.linkedin.com/in/aleabalda/"
            target="_blank"
          >
            aleabalda
          </a>
        </div>
        <div className="social">
          <span id="ig-icon" className="contact-icon">
            <InstagramIcon />
          </span>
          <a
            id="ig"
            className="social-info"
            href="https://www.instagram.com/codewithalee/"
            target="_blank"
          >
            codewithalee
          </a>
        </div>
      </div>
    </section>
  );
}
