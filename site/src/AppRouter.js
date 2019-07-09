import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './Routes/HomeContainer';
import OddCastContainer from './Routes/OddCastContainer';
import CloudsInMyCoffeeContainer from './Routes/CloudsInMyCoffeeContainer';
import SimContainer from './Routes/SimContainer';
import CodeContainer from './Routes/CodeContainer';
import NavBar from './components/NavBar';

function AppRouter() {
  return (
    <Router>
      <NavBar/>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/oddCast/" component={OddCastContainer} />
        <Route path="/cloudsInMyCoffee/" component={CloudsInMyCoffeeContainer} />
        <Route path="/sim/" component={SimContainer} />
        <Route path="/code/" component={CodeContainer} />
    </Router>
  );
}

export default AppRouter;
