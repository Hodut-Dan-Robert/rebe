import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Catalog from './components/catalog/Catalog';
import {HashRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route exact path='/'element={<App />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/catalog' element={<Catalog />} />
    </Routes>
  </HashRouter>
);

