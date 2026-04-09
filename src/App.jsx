import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ArticlePage from './pages/ArticlePage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlatformPage from './pages/PlatformPage';
import PrivacyPage from './pages/PrivacyPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import ThinkingPage from './pages/ThinkingPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="/thinking" element={<ThinkingPage />} />
        <Route path="/thinking/:slug" element={<ArticlePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
