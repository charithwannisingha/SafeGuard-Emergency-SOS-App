import React, { useState } from 'react';
import { ViewType } from './types';
import LandingPage from './components/LandingPage';
import MobileApp from './components/MobileApp';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b18]">
      {currentView === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
      {currentView === 'mobile-app' && (
        <MobileApp onNavigate={handleNavigate} />
      )}
      {currentView === 'admin-dashboard' && (
        <AdminDashboard onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;
