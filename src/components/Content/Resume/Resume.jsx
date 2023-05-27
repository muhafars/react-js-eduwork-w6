import { useState } from "react";
import "./resume.scss";
// Component
import Education from "./Education/Education";
import Work from "./Work/Work";
import Programming from "./Programming/Programming";
import Projects from "./Projects/Projects";

export default function Resume() {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programmings, setProgrammings] = useState(false);
  const [projects, setProjects] = useState(false);

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }

  function SetAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgrammings(false);
    setProjects(false);
  }

  return (
    <>
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>
        <div className="resume-new-section row" style={{ width: "70%", marginInline: "auto" }}>
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-briefcase"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-code"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false ? " resume-options-items" : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education{" "}
              </span>
              <span
                className={
                  workHistory === false ? " resume-options-items" : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work{" "}
              </span>
              <span
                className={
                  programmings === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProgrammings, true);
                }}
              >
                Programming{" "}
              </span>
              <span
                className={
                  projects === false ? " resume-options-items" : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workHistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </>
  );
}
