import React from "react";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <Switch>
    <div className="App">
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
    </div>
        </Switch>
  );
}

export default App;
