import React, { useState } from 'react';
import NavBarLogo from './features/navBar/navBarLogo';
import NavBarItem from './features/navBar/navBarItem';
import RightText from './features/main/righttext';
import LeftText from './features/main/lefttext';
import Cards from './features/main/cards/cards';
import MainLastText from './features/main/mainLastText';
import ContactSection from './features/footer/contactSection';
import FooterSection from './features/footer/footerSection';
import CreateAccount from './Components/createAccount';
import SignIn from './Components/SignIn';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('home');

  // REGISTER PAGE
  if (view === 'register') {
    return <CreateAccount setView={setView} />;
  }

  // SIGN IN PAGE
  if (view === 'signin') {
    return <SignIn setView={setView} />;
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 relative overflow-x-hidden">

      {/* Top Header Section */}
      <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between relative">

          {/* Logo */}
          <NavBarLogo />

          {/* Navigation */}
          <NavBarItem
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setView={setView}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden block p-2 text-gray-800 hover:text-[#007a6b] focus:outline-none z-50 relative"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </nav>
      </header>

      {/* Main Section */}
      <main className="w-full">
        <RightText setView={setView} />
        <LeftText setView={setView} />
        <Cards />
        <MainLastText />
      </main>

      {/* Footer */}
      <footer>
        <ContactSection />
        <FooterSection setView={setView} />
      </footer>

    </div>
  );
}

export default App;