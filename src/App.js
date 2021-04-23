import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Contact from "./components/Home/Contact/Contact";
import MemberDetail from "./components/Home/MemberDetail/MemberDetail";
import Login from "./components/Home/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard/Dashboard";
import AddReview from "./components/Home/AddReview/AddReview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route  path="/login">
           <Login></Login>
        </Route>
        <Route  path="/dashboard">
           <Dashboard/>
        </Route>
        <Route  path="/addReview">
           <AddReview></AddReview>
        </Route>
        <Route  path="/blog">
           <MemberDetail></MemberDetail>
        </Route>
        <Route  path="/services">
           <Services></Services>
        </Route>
        <Route  path="/contact">
           <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
