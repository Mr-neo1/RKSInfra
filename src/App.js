import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

