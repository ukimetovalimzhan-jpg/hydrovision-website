
import React, { useState, useCallback } from 'react';
import type { Language, Page } from './types';
import content from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [page, setPage] = useState<Page>('home');

  const handleNavigate = useCallback((newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  }, []);
  
  const currentContent = content[lang];

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage content={currentContent} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage content={currentContent} />;
      case 'services':
        return <ServicesPage content={currentContent} />;
      case 'projects':
        return <ProjectsPage content={currentContent} />;
      case 'contact':
        return <ContactPage content={currentContent} />;
      case 'privacy':
        return <PrivacyPolicyPage content={currentContent} />;
      default:
        return <HomePage content={currentContent} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header
        lang={lang}
        setLang={setLang}
        navLinks={currentContent.nav}
        onNavigate={handleNavigate}
        currentPage={page}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer
        content={currentContent}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
