import React from "react";
import "./programming.scss";
export default function Programming() {
  const value = [
    {
      text: "Javascript",
      percentage: 86,
    },
    {
      text: "C++",
      percentage: 50,
    },
    {
      text: "Python",
      percentage: 60,
    },
    {
      text: "Node JS",
      percentage: 80,
    },
    {
      text: "React JS",
      percentage: 80,
    },
    {
      text: "NO-SQL",
      percentage: 60,
    },
    {
      text: "SQL",
      percentage: 70,
    },
    {
      text: "HTML & CSS",
      percentage: 90,
    },
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                  <span className="language">{value.text} </span>
                  <div className="progress-some">
                    <div className="progress-new" style={{ width: `${value.percentage}%` }}>
                      {" "}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
