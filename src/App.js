import './App.css';
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import React from 'react';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//Content of different pages
const Start = () => <GamePage/>
const Home = () => <HomePage/>


//Links to components
const App = () => {
  return(
      //react router
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path={"/home"} exact={true} component={Home} />
            <Route path="/start" component={Start}/>
            <Route path="*" component={Home} />

          </Switch>
        </div>
      </Router>
  );
}


export default App;