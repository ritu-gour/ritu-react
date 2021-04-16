import React from "react";

function About() {
  return (
    <div
      className="container-fuid"
      style={{ marginTop: "100px", backgroundColor: "#29CCCC" }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>About</h1>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          {" "}
          <h1 className="badge badge-secondary">Personal Details</h1>{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div class="table-responsive">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <td>Date of Birth </td>
                  <td>: 5/8/1997</td>
                </tr>
                <tr>
                  <td>Father’s Name</td>
                  <td>: Shyam Lal</td>
                </tr>
                <tr>
                  <td>Current Address</td>
                  <td>: Chandbad Dhankedi , District - Sehore(MP) 466001</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>
                    <a
                      href="https://www.linkedin.com/in/ritugour"
                      target="_blank"
                    >
                      {" "}
                      Link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>
                    <a href="https://github.com/ritu-gour" target="_blank">
                      {" "}
                      Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
