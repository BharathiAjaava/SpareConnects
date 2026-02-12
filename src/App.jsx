import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import 'intersection-observer';

import Home from './Pages/Home/Home';
import FAQ from './Pages/FAQ/FAQ.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Terms from './Components/Footer/TermsAndConditions.jsx';


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}

export default App
