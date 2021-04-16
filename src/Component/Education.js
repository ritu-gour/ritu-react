import React from "react";

function Education() {
  return (
    <div className="container-fuid" style={{ marginTop: "100px",backgroundColor: "#29CCCC" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Education</h1>
      </div>

      <div className="row mt-5">
        <div className="col-sm-4">
          <h1>College:</h1>
        </div>
        <div className="col-sm-8">
          <h3>
            Pursuing B.Tech. – Computer Science & Engineering | CGPA: 7.94/10
            (2018-2022)
          </h3>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <h1>School:</h1>
        </div>
        <div className="col-sm-8">
          <h3>Gandhi Kabir | 12th | MP Board | 78% (2018)</h3>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <h1>School:</h1>
        </div>
        <div className="col-sm-8">
          <h3>Gandhi Kabir | 10th | MP Board | 81.2% (2016)</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;
