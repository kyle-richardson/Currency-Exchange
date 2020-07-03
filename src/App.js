import React from "react";
import Home from "./components/Home";
import Start from "./components/Start";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Start} />
      <Route exact path="/rates" component={Home} />
    </div>
  );
}

export default App;
