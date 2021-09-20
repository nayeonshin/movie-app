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
      <Route path={"/movie-app/"} exact={true} component={Home} />
      <Route path={"/movie-app/about"} component={About} />
      <Route path={"/movie-app/movie/:id"} component={Detail} />
    </BrowserRouter>
  );
}

export default App;
