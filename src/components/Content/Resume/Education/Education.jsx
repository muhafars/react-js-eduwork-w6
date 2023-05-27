import React from "react";
import "./education.scss";
const education = [
  {
    universityName: "Niomic Technology Bootcamp",
    universityDegree: "Bachelors of Technology in Computer Science",
    yearPassedOut: "2018 ~",
  },
  {
    universityName: "Indobot x Digi Kominfo",
    universityDegree: "Internet Of Thing",
    yearPassedOut: "2021-2022",
  },
  {
    universityName: "Kelas Work",
    universityDegree: "Project Managing, Administration, Accounting",
    yearPassedOut: "2021-2022",
  },
  {
    universityName: "Eduwork Bootcamp",
    universityDegree: "MERN FULL Stack Javacript",
    yearPassedOut: "2022-2023",
  },
];
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        {education.map((edu, index) => (
          <div className="education-one my-4 justify-content-between d-flex flex-row" key={index}>
            <div className="d-flex flex-column ">
              <span className="university-name">{edu.universityName}</span>
              <span className="university-degree">{edu.universityDegree}</span>
            </div>
            <div>
              <span className="passed-out">{edu.yearPassedOut}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
