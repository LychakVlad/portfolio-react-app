import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ReactFullpage from '@fullpage/react-fullpage';
import Projects from './components/Projects';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bg-neutral-100">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
