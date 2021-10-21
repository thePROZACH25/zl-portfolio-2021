import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          {/* About Page */}
          <Route path="/about">
            <About />
          </Route>
          {/* Projects Page */}
          <Route path="/projects">
            <Projects />
          </Route>
          {/* Contact Page */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* Home Page */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
