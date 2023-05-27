import React from "react";
import "./project.scss";
const ProjectsList = [
  {
    name: "Mini Game JS",
    description: "Membuat Game Tebak Angka",
    time: "2020",
  },
  {
    name: "App Doctor Bookmented",
    description: "Build APP Doctor Appointments with React JS",
    time: "2021",
  },
  {
    name: "E-Commerce With React JS",
    description: "Build from scratch web E-Commerce with React",
    time: "2022",
  },
];
export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        {ProjectsList.map((project, i) => (
          <div className="education-one my-4 justify-content-between d-flex flex-row" key={i}>
            <div className="d-flex flex-column new-one">
              <span className="project-title">{project.name} </span>
              <span className="project-description">{project.description} </span>
            </div>{" "}
            <div>
              <span className="project-time">{project.time} </span>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
