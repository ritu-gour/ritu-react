import logo from "../RituLogo.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar({ value, onChange }) {
  const heading = {
    color : value
  }
  console.log(value)
  return (
    <nav className="navbar navbar-expand-lg  fixed-top shadow-lg" style={heading} >
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded text-black"
            alt=""
            loading="lazy"
          />
        </Link>
        <b className="ml-2">Ritu</b>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hobbies" className="nav-link">
              Hobbies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work-experience" className="nav-link">
              Work Experience
            </Link>
          </li>
          <li className="nav-item">
            <input type="color" value={value} onChange={onChange} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
