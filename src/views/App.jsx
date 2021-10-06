import React from 'react';
import Content from '../components/layout/Content';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const App = props => (
  <div className="App">

    <Router>


      <Content />

    </Router>


  </div>
);

export default App