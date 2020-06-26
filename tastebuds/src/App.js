import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from '../src/components/WelcomePage'
import RestaurantPage from './components/RestaurantPage';
import Terms from './components/terms';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <section>
    <NavBar/>
    <Switch>
      <Route exact path={"/"}>
        <Welcome />
      </Route>
      <Route path={"/restaurant/:name"}>
        <RestaurantPage />
      </Route>

      <Route path={"/TermsPolicies"}>
        <Terms />
      </Route>
    </Switch>
    </section>
    </div>
  );
}

export default App;
