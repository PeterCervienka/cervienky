import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Cervienky</Link>
        </li>
        <li>
          <Link to="/o-nas">O nás</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/o-nas" component={About} />
    </div>
  </Router>
);

export default App;