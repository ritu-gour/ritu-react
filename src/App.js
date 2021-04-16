import {useState} from "react";

import NavBar from "./Component/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WorkExperience from "./Component/WorkExperience";
import Hobbies from "./Component/Hobbies";
import Education from "./Component/Education";
import About from "./Component/About";
import Home from "./Component/Home";


const PageNotFound = () =>{
  return <div style={{marginTop:"200px", textAlign:"center"}}>  Page Not Found </div>
}


function App() {

const [state, setState]= useState('#29CCCC')

  const handlcolor = (e) => (
    setState(e.target.value)
  )

  return (
    <div>
      <Router>
      <NavBar  value={state} onChange={handlcolor}/>
        <Switch> 
        <Route exact path="/" component={Home} value={state} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/hobbies" component={Hobbies} />
        <Route exact path="/work-experience" component={WorkExperience} />
        <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
