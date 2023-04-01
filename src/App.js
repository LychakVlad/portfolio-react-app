import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ReactFullpage from '@fullpage/react-fullpage';
import Projects from './components/Projects';

function App() {
  return (
    <div className=" bg-neutral-100">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
