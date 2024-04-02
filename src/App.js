import React from 'react';
import './App.css';
import  { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transaction from './pages/Transaction';
import Display from './pages/Display';
import Utility from './pages/Utility';
import Report from './pages/Report';

const App = () => {
  return(
    <Router>
      <Sidebar>
        <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/account' element={<Accounts />}/>
        <Route path='/transaction' element={<Transaction />}/>
        <Route path='/display' element={<Display />}/>
        <Route path='/report' element={<Report />}/>
        <Route path='/utility' element={<Utility />}/>
        </Routes>
      </Sidebar>
    </Router>
  )
}

export default App;
