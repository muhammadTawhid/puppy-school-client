import React, { createContext, useState } from "react";
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
import Reviews from "./components/Home/Reviews/Reviews";
import AddServices from "./components/Home/AddServices/AddServices";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route  path="/login">
           <Login></Login>
        </Route>
        <PrivateRoute  path="/dashboard">
           <Dashboard/>
        </PrivateRoute>
        <PrivateRoute  path="/addReview">
           <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute  path="/addServices">
           <AddServices></AddServices>
        </PrivateRoute>
        <Route  path="/blog">
           <MemberDetail></MemberDetail>
        </Route>
        <PrivateRoute  path="/services">
           <Services></Services>
        </PrivateRoute>
        <Route  path="/contact">
           <Contact></Contact>
        </Route>
        <Route  path="/reviews">
           <Reviews></Reviews>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
