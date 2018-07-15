import React from 'react';

import Header from '../header/Header';
import AboutUs from '../about_us/AboutUs';
import Event from '../event/Event';
import StoryLine from '../storyline/StoryLine';
import Contact from '../contact/Contact';
import Map from '../map/Map';

const App = () => (
  <div>
    <nav className="fh5co-nav">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="fh5co-logo"><a href="index.html">L&P '18</a></div>
          </div>
       </div>
      </div>
    </nav>

    <Header />
    <AboutUs />
    <Event />
    <StoryLine />
    <Contact/>
    <Map />
  </div>
);

export default App;