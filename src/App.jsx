import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
     
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
