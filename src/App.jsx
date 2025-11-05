import { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    team: useRef(null),
    events: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar sectionsRef={sectionsRef} />

      {/* Home/Hero */}
      <section ref={sectionsRef.home} id="home" className="relative">
        <Hero onCTAClick={() => sectionsRef.contact.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      </section>

      {/* Main content sections */}
      <Sections sectionsRef={sectionsRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
