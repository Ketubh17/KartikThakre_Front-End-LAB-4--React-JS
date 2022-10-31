import './App.css';
import ShowData from './component/ShowData'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ShowData/>}></Route>
        </Routes>
      </Router>
     </div>
  );
}

export default App;