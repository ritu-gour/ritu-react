import React from "react";

function WorkExperience() {
  return (
    <div className="container-fuid" style={{ marginTop: "100px",backgroundColor: "#29CCCC" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Work Experience</h1>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-2">
          <ul>
            <li>
              Attended a 7-day workshop on Cyber Security & Ethical Hacking at
              RGPV University under TEQIP-III at SISTec GN
            </li>
            <li>
              Completed an online certified course on JavaScript : ES6 Basic
              from Coursera.
            </li>
            <li>
              {" "}
              Completed an online certified course on Object - Oriented
              Programming with Java from Coursera.
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          {" "}
          <h3 className="badge badge-secondary">Project Details</h3>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 ">
          <p>Title : Stationery</p>
          <p> Key Skills : HTML, CSS, Bootstrap, JavaScript, PHP & MySQL</p>
          <p>
            Description : This Stationery management system manages the records
            of things. It provides a platform to manage records without any
            hassle. And user can see all products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
