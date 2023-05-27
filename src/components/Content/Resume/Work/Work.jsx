import React from "react";
import "./work.scss";
const workHistory = [
  {
    name: "PT.Prudential Life Insurance",
    position: "Agent",
    workPass: "2016-2017",
  },
  {
    name: "UD.Kencana",
    position: "Electrican Technician",
    workPass: "2017-2019",
  },
  {
    name: "GoTo",
    position: "Driver",
    workPass: "2019-2020",
  },
];
export default function Work() {
  return (
    <>
      <div className="flex-column work-inside-new">
        {workHistory.map((work, i) => (
          <div className="my-4 flex-column justify-content-between" key={i}>
            <div className="d-flex flex-column">
              <span className="company-name">{work.name}</span>
              <span className="position">{work.position}</span>
              <span className="passed-out">{work.workPass}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
