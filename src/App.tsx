import React, { useState } from 'react';
import logo from './logo.jpg';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { createContext, useContext } from 'react';

import Home from "./pages/Home";
import Health from "./pages/Health";
import Dental from "./pages/Dental";
import Travel from "./pages/Travel";
import Vision from "./pages/Vision";
import Medicare from "./pages/Medicare";

import './App.css';
import { string } from 'prop-types';

const InsuranceContext = createContext({
  insurance: 'string',
  setInsurance: (type:string) => {}
});

function App() {
  const [insurance, setInsurance] = useState('');
  const value = { insurance, setInsurance };

  return (
    <InsuranceContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>   
        <header className="App-header">
              <NavLink
                  to="/"
                  onClick={()=>{setInsurance('');console.log("Insurance context = " + value.insurance)}}
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </NavLink>
                <NavLink
                  to="health"
                  onClick={()=>{setInsurance('Health');console.log("Insurance context = " + value.insurance)}}
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                >
                  Health
                </NavLink>
                <NavLink
                  onClick={()=>{setInsurance('Dental');console.log("Insurance context = " + value.insurance)}}
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                  to="dental"
                >
                  Dental
                </NavLink>
                <NavLink
                  onClick={()=>{setInsurance('Vision');console.log("Insurance context = " + value.insurance)}}
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                  to="Vision"
                >
                  Vision
                </NavLink>
                <NavLink
                  onClick={()=>{setInsurance('Medicare');console.log("Insurance context = " + value.insurance)}}
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                  to="Medicare"
                >
                  Medicare
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link App-link' : 'link App-link')}
                  onClick={()=>{setInsurance('Travel');console.log("Insurance context = " + value.insurance)}}
                  to="Travel"
                >
                  Travel
                </NavLink>
        </header>
        <main className="App-body">
              <div  className="calc-container">
                <h3>Shop and compare plans</h3> 
                <Routes>
                  <Route path="/" element ={<Home/>} />
                  <Route path="/Health" element ={<Health />} />
                  <Route path="/Dental" element ={<Dental />} />
                  <Route path="/Vision" element ={<Vision />} />
                  <Route path="/Medicare" element ={<Medicare />} />
                  <Route path="/Travel" element ={<Travel />} />
                </Routes>
                {insurance && <button className="estimate">
                  Get {insurance} insurance with monthly premium: $0  
                </button>}  
              </div>  
        </main>
        </BrowserRouter>  

      </div>
    </InsuranceContext.Provider>
  );
}

export default App;
