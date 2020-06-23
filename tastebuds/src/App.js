import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from '../src/components/WelcomePage'
import RestaurantPage from './components/RestaurantPage';
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
    </Switch>
    </section>
    </div>
  );
}

export default App;
