import './styles.css';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import StatsStrip      from './components/StatsStrip';
import Services        from './components/Services';
import Portfolio       from './components/Portfolio';
import About           from './components/About';
import Process         from './components/Process';
import Testimonials    from './components/Testimonials';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
