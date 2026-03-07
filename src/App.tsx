import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AuditAssurance from './pages/AuditAssurance';
import WealthAdvisory from './pages/WealthAdvisory';
import FinancialConsultancy from './pages/FinancialConsultancy';
import ComplianceLegal from './pages/ComplianceLegal';
import IEPFShareRecovery from './pages/ClaimShare';
import FounderMessage from './pages/FounderMessage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/audit-assurance" element={<AuditAssurance />} />
        <Route path="/wealth-advisory" element={<WealthAdvisory />} />
        <Route path="/financial-consultancy" element={<FinancialConsultancy />} />
        <Route path="/compliance-legal-support" element={<ComplianceLegal />} />
        <Route path="/iepf-share-recovery" element={<IEPFShareRecovery />} />
        <Route path="/founder-message" element={<FounderMessage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
