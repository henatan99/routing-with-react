import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/shop" exact element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
