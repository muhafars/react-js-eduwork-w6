import React, { useState, useRef } from "react";
// import { SMTPClient } from "emailjs";
import "./form-contact.scss";

export default function FormContact() {
  //   const client = new SMTPClient({
  //     user: "user",
  //     password: "password",
  //     host: "smtp.your-email.com",
  //     ssl: true,
  //   });
  const [name, setname] = useState("");

  //   const [email, setemail] = useState("");
  const form = useRef();
  //   const [message, setmessage] = useState("");
  //   const sendEmail = e => {
  //     e.preventDefault();
  //     // console.log(e);
  //     console.log(form.current);

  //     const templateparams = {
  //       from_name: name + " " + email,
  //       to_name: "mohammed.khan@cantileverlabs.com",
  //       feedback: message,
  //     };
  //     // eslint-disable-next-line no-undef
  //     emailjs.send("service_1k26k8o", "template_otup6qi", templateparams).then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       }
  //     );
  //   };

  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in touch </span>

            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
                background="transparent"
                speed="1"
                style={{ width: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            // eslint-disable-next-line no-undef
            <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>
              <div className="input-group my-3 d-flex flex-column">
                <label> Name </label>
                <input
                  value={name}
                  onChange={e => {
                    setname(e.target.value);
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
                    setemail(e.target.value);
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
                    setmessage(e.target.value);
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
          </div> */}
        </div>
      </div>
    </>
  );
}
