import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Scouts from './pages/Scouts';
import Parents from './pages/Parents';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="Route">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Scouts" component={Scouts} />
          <Route path="/Choombas" component={Parents} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
