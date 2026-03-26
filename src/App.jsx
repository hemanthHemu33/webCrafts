import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import AwardsPage from './pages/AwardsPage';
import CareersPage from './pages/CareersPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import InsightsPage from './pages/InsightsPage';
import LocationsPage from './pages/LocationsPage';
import NewsroomPage from './pages/NewsroomPage';
import SearchPage from './pages/SearchPage';
import ServicesPage from './pages/ServicesPage';
import SustainabilityPage from './pages/SustainabilityPage';
import WhatWeThinkPage from './pages/WhatWeThinkPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/what-we-think" element={<WhatWeThinkPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newsroom" element={<NewsroomPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
