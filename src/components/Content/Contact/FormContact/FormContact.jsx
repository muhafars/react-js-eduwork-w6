import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./form-contact.scss";
import { Player } from "@lottiefiles/react-lottie-player";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    // console.log(e);
    console.log(form.current);

    const templateParams = {
      from_name: name + " " + email,
      to_name: "dev.muhafars@gmail.com",
      feedback: message,
    };
    emailjs.send("service_vcmbrxr", "template_ltmvfrm", templateParams, "xnXHzfGmtKd7phZC_").then(
      function (response) {
        console.log("SUCCESS! Terkirim", response.status, response.text);
      },
      function (error) {
        console.log("Failed there is....", error);
      }
    );
  };

  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in touch </span>

            <div className="py-5 d-flex justify-content-center">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/temp/lf20_U1CPFF.json"
                style={{ width: "300px" }}
              ></Player>
            </div>
          </div>

          <div className="col-lg-6 col-md-5 col-sm-12 my-auto card-contact-right">
            <form ref={form} className="d-flex flex-column" onSubmit={sendEmail}>
              <div className="input-group my-3 d-flex flex-column">
                <label> Name </label>
                <input
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your name"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Email </label>
                <input
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your Email"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label> Message </label>
                <textarea
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your message"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <input className="btn btn-success" type="submit" value="Send Message" />{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
