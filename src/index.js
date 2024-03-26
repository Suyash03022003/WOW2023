import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Registration/Register';
import Team from './Components/team/Team';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();