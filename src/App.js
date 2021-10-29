import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import SmoothScrollBar from "./components/SmoothScrollBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
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
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
