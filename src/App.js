import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from './Components/Home';

function App() {

  return (
    <div className="App">

      <Router>
        <Route path="/" component={Home} />
      </Router>

    </div>
  );
}

export default App;
