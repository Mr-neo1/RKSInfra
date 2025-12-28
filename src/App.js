import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import './App.css';

// Lazy load pages for faster initial load
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const HowWeWorkPage = React.lazy(() => import('./pages/HowWeWorkPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading fullScreen />}>
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
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

