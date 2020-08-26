import React from 'react';
import Header from './header.js';
import Home from './Home.js';
import './App.css';
import './header.css';
// import Car from './car.js';
import Aboutus from './Aboutus.js';
import './Aboutus.css';
import MainFooter from './mainfooter';
import './mainfooter.css';
import './courses.css';
// import Form from './form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Courses.js';
import ThreeDModel from './ThreeDModel.js';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HeroImage from './heroImage.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Switch>
          <Route exact path="/" strict component={ThreeDModel} />
          <Route exact path="/Home" strict component={Home} />
          {/* <Route exact path="/Aboutus" strict component={Aboutus} />
          <Route exact path="/Courses" strict component={Courses} /> */}
         
        </Switch>
        {/* <HeroImage/> */}
        {/* <MainFooter/> */}
      </div>
    </Router>

    

  );
}

export default App;
