import React , {Component} from 'react';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Col from './Col';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
      <table>
        <tbody>
          <tr>
            <Col />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
