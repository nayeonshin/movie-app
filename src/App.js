import React from "react";

import About from "./routes/About";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        exact={true}
        component={Home}
      />
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} component={Detail} />
    </BrowserRouter>
  );
}

export default App;
