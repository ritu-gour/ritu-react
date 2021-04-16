import React from "react";

function Home() {
  return (
    <div className="container-fuid" style={{ marginTop: "100px",backgroundColor: "#29CCCC" }}>
      <div className="row">
        <div className="col-sm-12">
          {" "}
          <h3 className="badge badge-secondary">Career Objective</h3>{" "}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          {" "}
          <h5>
            {" "}
            Self-motivated, highly passionate and hardworking fresher looking
            for an opportunity to work in a challenging organization to utilize
            my skills and knowledge to work for the growth of the organization.{" "}
          </h5>{" "}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          {" "}
          <h3 className="badge badge-secondary">
            Key Technical Skills/Expertise
          </h3>{" "}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          {" "}
          <h5> C, C++, Java, JavaScript, PHP & MySQL</h5>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
