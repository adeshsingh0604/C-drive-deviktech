import React from 'react';
import Header from './header.js';
// import Footer from './footer.js';
import './App.css';
import './header.css';
// import './footer.css';
// import Car from './car.js';
import Aboutus from './Aboutus.js';
import './Aboutus.css';
// import Footerlinks from './footerlinks';
// import './footerlinks.css';
import MainFooter from './mainfooter';
import './mainfooter.css';
import './courses.css';
// import Form from './form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Courses.js';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Home} /> */}
      <Header/>
      <Route exact path="/Courses.js" component={Courses} />
      <Route exact path="/Aboutus.js" component={Aboutus} />
      <MainFooter/>
    </div>
  );
}

export default App;
