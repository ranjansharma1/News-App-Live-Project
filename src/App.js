
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  a="Ranjan Sharma";
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={8} category={"science"}/>
      </div>
    )
  }
}
