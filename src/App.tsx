import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/om-mig"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageTransition>
                  <ServiceDetailPage />
                </PageTransition>
              }
            />
            <Route
              path="/projekter"
              element={
                <PageTransition>
                  <ProjectsPage />
                </PageTransition>
              }
            />
            <Route
              path="/projekter/:id"
              element={
                <PageTransition>
                  <ProjectDetailPage />
                </PageTransition>
              }
            />
            <Route
              path="/proces"
              element={
                <PageTransition>
                  <ProcessPage />
                </PageTransition>
              }
            />
            <Route
              path="/priser"
              element={
                <PageTransition>
                  <PricingPage />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <BlogPage />
                </PageTransition>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <PageTransition>
                  <BlogPage />
                </PageTransition>
              }
            />
            <Route
              path="/kontakt"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
