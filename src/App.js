import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import Navbar1 from './components/Navbar';
import Home from './components/Home'
import Projects from './components/Projects'
import Articles from './components/Articles'


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar1 />
          <br />
          <div className='App-body'>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/articles' component={Articles} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
