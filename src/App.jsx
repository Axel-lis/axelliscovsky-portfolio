import { Navbar } from './components/Navbar';
import { Principal } from './components/Principal';
import { About } from './components/About';
import { Tecnologias } from './components/Tecnologias';
import { Experiencia } from './components/Experiencia';
import { Proyectos } from './components/Proyectos';
import { Contacto } from './components/Contacto';
const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialised bg-cy-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Principal />
          <About />
          <Tecnologias />
          <Experiencia />
          <Proyectos />
          <Contacto />
        </div>
      </div>
    </div>
  );
};
export default App;
