import Home from './Pages/Home';
import About from './Pages/About'
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'

function App() {
    return (
      <div>
        <div className="section-home">
          <Home />
        </div>
        <div className="section-about">
          <About />
        </div>
        <div className="section-skills">
          <Skills />
        </div>
        <div className="section-projects">
          <Projects />
        </div>
      </div>
    );
  }
  

export default App;
