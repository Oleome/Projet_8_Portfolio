
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header/header';
import Error from './pages/error';
import Home from './pages/home';
import './styles/global.scss';
import APropos from './pages/a_propos';
import Contact from './pages/contact';
import Projets from './pages/projets';
import Services from './pages/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos/" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



