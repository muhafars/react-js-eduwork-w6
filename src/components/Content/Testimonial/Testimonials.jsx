import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ajeng Mariska",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
    {
      name: "Tony",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
    {
      name: "Ellen",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
  ];
  return (
    <>
      <div>
        <div className="testimonials-part my-5" id="testimonials">
          <div className="testimonials-inner-part d-flex flex-column">
            <span className="about-me-text">Testimonials</span>
            <span className="why-text-sub mb-5">What my clients say about me </span>
            <div className="row mx-5">
              {testimonials.map(value => {
                return (
                  <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                    <div className="card shadow testimoniall-card d-flex flex-column">
                      <span className="description">{value.text} </span>
                      <span className="stars">⭐⭐⭐⭐⭐</span>
                      <span className="name">{value.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
