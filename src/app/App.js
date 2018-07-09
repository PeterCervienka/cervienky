import React from 'react';

import Header from '../header/Header';
import AboutUs from '../about_us/AboutUs';

const App = () => (
  <div>
    <nav className="fh5co-nav">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="fh5co-logo"><a href="index.html">Svadba roka 2018</a></div>
          </div>
       </div>
      </div>
    </nav>

    <Header />
    <AboutUs />
  </div>
);

export default App;