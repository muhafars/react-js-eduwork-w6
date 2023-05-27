import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">E-commerce application </span>
            <span className="university-degree">Flutter </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2017-2021 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Mobile application </span>
            <span className="university-degree">React Native,Firebase </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2017-2021 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">3D runner game </span>
            <span className="university-degree">Unity C# </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2017-2021 </span>
          </div>
        </div>
      </div>
    </>
  );
}
