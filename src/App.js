
import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const pageSize=9;
  // const country='in';
  

  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState("in");
  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const country=selectedOption
  
  const updatedProgress=(progress)=>{
    setProgress(progress);
  }

    return (
      <div>
        <Router>
          <Navbar onOptionChange={handleChange}/> 
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
            />
          <Routes>     
            <Route exact path='/'  element={<News setProgress={updatedProgress}  key="general" pageSize={pageSize} category="general" country={country}/>}></Route>
            <Route exact path='/science' element={<News setProgress={updatedProgress}  key="science" pageSize={pageSize} category="science" country={country}/>}></Route>
            <Route exact path='/technology' element={<News setProgress={updatedProgress}  key="technology" pageSize={pageSize} category="technology" country={country}/>}></Route>
            <Route exact path='/sports'  element={<News setProgress={updatedProgress}  key="sports" pageSize={pageSize} category="sports" country={country}/>}></Route>
            <Route exact path='/health'  element={<News setProgress={updatedProgress}  key="health" pageSize={pageSize} category="health" country={country}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={updatedProgress}  key="entertainment" pageSize={pageSize} category="entertainment" country={country}/>}></Route>
            <Route exact path='/business' element={<News setProgress={updatedProgress}  key="business" pageSize={pageSize} category="business" country={country}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}
