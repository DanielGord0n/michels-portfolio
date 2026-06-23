import { UIProvider } from './context/UIContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ImpactReport from './components/ImpactReport';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import CaseStudies from './components/CaseStudies';
import Work from './components/Work';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModalRoot from './components/ModalRoot';
import Lightbox from './components/Lightbox';

export default function App() {
  return (
    <UIProvider>
      <Nav />
      <main>
        <Hero />
        <ExperienceTimeline />
        <ImpactReport />
        <CaseStudies />
        <About />
        <Work />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ModalRoot />
      <Lightbox />
    </UIProvider>
  );
}
