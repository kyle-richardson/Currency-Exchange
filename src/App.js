import React from "react";
import Home from "./components/Home";
import Start from "./components/Start";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/rates" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
