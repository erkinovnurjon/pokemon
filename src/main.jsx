/* eslint-disable react/no-deprecated */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import RightContent from './components/RightContent'
import SearchList from './components/SearchList'
import NoutFound from './pages/NoutFound'
import SavedPokemons from './components/SavedPokemons'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/pokemon/:id' element={<RightContent />} /> 
        <Route path='/search/:id' element={<SearchList />} />
        <Route path='/saved'  element={<SavedPokemons />} /> 
        <Route path='*' element={<NoutFound />} />

      </Routes>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
