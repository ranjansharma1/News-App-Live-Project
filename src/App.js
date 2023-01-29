
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=7;
  country='in';
  state={
    progress:30
  }
  setProgress=(progress) => {
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/> 
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>           
            <Route exact path='/'  element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" country={this.country}/>}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" country={this.country}/>}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" country={this.country}/>}></Route>
            <Route exact path='/sports'  element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" country={this.country}/>}></Route>
            <Route exact path='/health'  element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" country={this.country}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" country={this.country}/>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" country={this.country}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
