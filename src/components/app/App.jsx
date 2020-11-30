import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';

export default function App() {
  return (
    <Switch>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Switch>
  );
}
