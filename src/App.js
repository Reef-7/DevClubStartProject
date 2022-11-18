import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
     
  );
}

export default App;