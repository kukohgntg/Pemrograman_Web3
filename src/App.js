import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
