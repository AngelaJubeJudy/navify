import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Templates from './pages/Templates';
import BuildYourNav from './pages/BuildYourNav';
import News from './pages/News';
import DailyTools from './pages/DailyTools';
import NewLinks from './pages/NewLinks';
import Trending from './pages/Trending';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/requests" element={<Requests />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/build-your-nav" element={<BuildYourNav />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/daily-tools" element={<DailyTools />} />
                  <Route path="/new-links" element={<NewLinks />} />
                  <Route path="/trending" element={<Trending />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </div>
          </Router>
        </ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;