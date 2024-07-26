import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AdminPage from './AdminPage';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Book</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/book" component={BookingPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};                                                                                                                                                                                                                                                                                                              

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                