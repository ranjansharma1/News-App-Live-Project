
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  pageSize=10;
  country='in';
  render() {
    return (
      <div>
        <Router>
          <Navbar/> 
          <Routes>           
            <Route exact path='/'  element={<News key="general" pageSize={this.pageSize} category="general" country={this.country}/>}></Route>
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} category="science" country={this.country}/>}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} category="technology" country={this.country}/>}></Route>
            <Route exact path='/sports'  element={<News key="sports" pageSize={this.pageSize} category="sports" country={this.country}/>}></Route>
            <Route exact path='/health'  element={<News key="health" pageSize={this.pageSize} category="health" country={this.country}/>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" country={this.country}/>}></Route>
            <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} category="business" country={this.country}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
