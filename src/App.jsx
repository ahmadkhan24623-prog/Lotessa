import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBarLogo from './features/navBar/navBarLogo';
import NavBarItem from './features/navBar/navBaritem';
import RightText from './features/main/righttext';
import LeftText from './features/main/lefttext';
import Cards from './features/main/cards/cards';
import MainLastText from './features/main/mainLastText';
import ContactSection from './features/footer/contactSection';
import FooterSection from './features/footer/footerSection';
import CreateAccount from './Components/createAccount';
import SignIn from './Components/SignIn';

function HomeLayout({ setView }) {
  return (
    <>
      <main className="w-full">
        <RightText setView={setView} />
        <LeftText setView={setView} />
        <Cards />
        <MainLastText />
      </main>
      <footer>
        <ContactSection />
        <FooterSection setView={setView} />
      </footer>
    </>
  );
}

function AppContent() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // This helper keeps your existing buttons working without breaking child components
  const handleViewChange = (targetView) => {
    if (targetView === 'signin') navigate('/signin');
    else if (targetView === 'register') navigate('/register');
    else navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 relative overflow-x-hidden">
      {/* Top Header Section stays everywhere */}
      <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between relative">
          <NavBarLogo />
          <NavBarItem isOpen={isOpen} setIsOpen={setIsOpen} setView={handleViewChange} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden block p-2 text-gray-800 hover:text-[#007a6b] focus:outline-none z-50 relative"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* React Router handles what to show based on the URL bar */}
      <Routes>
        <Route path="/" element={<HomeLayout setView={handleViewChange} />} />
        <Route path="/signin" element={<SignIn setView={handleViewChange} />} />
        <Route path="/register" element={<CreateAccount setView={handleViewChange} />} />
      </Routes>
    </div>
  );
}

// Main App component wraps everything in the Router context
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;