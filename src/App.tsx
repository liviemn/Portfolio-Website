import Home from './Pages/Home';
import About from './Pages/About'
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <SpeedInsights />
    </div>
  );
}

export default App;
